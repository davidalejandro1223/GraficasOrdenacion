//--Declaracion Arreglos--
    var arrPuntosS = [];
    var arrPuntosB = [];
    var arrPuntosIns = [];    
    var arrN = [];

    for (i = 1; i <= 200; i++) {

        //--contadores--
        var s = 0;
        var b = 0;
        var ins =0;

        // --Generacion de los arreglos--
        var arregloS = [i];
        var arregloB = [i];
        var arregloIns = [i];
        for (h = 0; h < i; h++) {
            var num = Math.round(Math.random() * 10);
            arregloS[h] = num;
            arregloB[h] = num;
            arregloIns[h] = num;
        }
        
        //console.log(arreglo.join(', '));

        //--Metodo de seleccion--
        s = s + 1;
        for (j = 0; j < i - 1; j++) {
            s = s + 9;
            var pos = j + 1;
            var valor = arregloS[pos];
            for (k = j + 1; k < i; k++) {
                s = s + 5;
                if (arregloS[pos] > arregloS[k]) {
                    s = s + 3;
                    valor = arregloS[k];
                    pos = k;
                }
            }
            s = s + 4;
            if (arregloS[j] > arregloS[pos]) {
                s = s + 5
                arregloS[pos] = arregloS[j];
                arregloS[j] = valor;
            }
        }
        s = s + 2;

        arrN.push(i); 
        arrPuntosS.push(s);
        //--Fin Metodo seleccion--

        //--Metodo Burbuja--
        
        b = b + 1;
        for (j = 0; j < (i - 1); j++) {
            b = b + 5;
            for (k = (j + 1); k < i; k++) {
                b = b + 5;
                if (arregloB[j] > arregloB[k]) {
                    b = b + 7;
                    aux = arregloB[j];
                    arregloB[j] = arregloB[k];
                    arregloB[k] = aux;
                }
            }
            b = b + 1;
        }
        b = b + 2;

        arrPuntosB.push(b);

        //--Fin metodo burbuja--

        //--Metodo insercion--
        ins = 2;
        var it=2;
        ins = ins+1;
        while(it<=i){
            ins = ins+7;
            jIns = it-1;
            tempIns = arregloIns[it]
            while(tempIns<arregloIns[jIns]){
                ins = ins+6;
                arregloIns[jIns+1] = arregloIns[jIns];
                jIns=jIns-1
            }
            arregloIns[jIns+1] = tempIns;
            it = it+1;
            ins = ins+7;
        }
        ins = ins+1;

        arrPuntosIns.push(ins);
        //--Fin metodo Insercion--


    }

    //Generacion de la grafica

    var ctx = document.getElementById("lienzo").getContext("2d");
    var myChart = new Chart(ctx, {
    	type: 'line',
    	data: {
    		labels: arrN,
    		datasets: [{
    			label : "Metodo de seleccion",
    			data: arrPuntosS,
    			backgroundColor: [
    				'rgba(255, 99, 132, 0.2)'
    			],
    			borderColor: [
    				'rgba(255,99,132,1)'
    			],
    			borderWidth: 1
    		},
    		{
    			label : "Metodo de la burbuja",
    			data: arrPuntosB,
    			backgroundColor : [
    				'rgba(54, 162, 235, 0.2)'
    			],
    			borderColor: [
    				'rgba(54, 162, 235, 1)'
    			],
    			borderWidth: 1
    		},
            {
                label : "Metodo de insersion",
                data : arrPuntosIns,
                backgroundColor : [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor : [
                     'rgba(75, 192, 192, 1)'
                ],
                borderWidth : 1

            }]
    	},
    	options: {
    		scales: {
    			yAxes: [{
    				ticks: {
    					beginAtZero: true
    				}
    			}]
    		}
    	}
    });
