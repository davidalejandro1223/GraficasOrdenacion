//--Declaracion Arreglos--
    var arrPuntosS = [];
    var arrPuntosB = [];
    var arrPuntosIns = [];
    var arrPuntosMerge  = [];
    var arrPuntosQuick = [];    
    var arrN = [];

    for (i = 10; i <= 200; i++) {

        //--contadores--
        var s = 0;
        var b = 0;
        var ins =0;
        var contMerge =0;
        var contQuick =0;

        // --Generacion de los arreglos--
        var arregloS = [i];
        var arregloB = [i];
        var arregloIns = [i];
        var arregloMerge = [i];
        var arregloQuick = [i];

        //--llenado de los arreglos--
        for (h = 0; h < i; h++) {
            var num = Math.round(Math.random() * 10);
            arregloS[h] = num;
            arregloB[h] = num;
            arregloIns[h] = num;
            arregloMerge[h] = num;
            arregloQuick[h] = num;
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


        //--Implementacion MergeSort--

        sort(arregloMerge);
        arrPuntosMerge.push(contMerge);


        //--implementacion QuickSort--
        
        quickSort(arregloQuick);
        
        
        arrPuntosQuick.push(contQuick);
    }

    //--Metodo MergeSort--

    function sort(arr) {
        // Contaror para el número de operaciones apra el algoritmo merge
        contMerge = 1;
        var length = arr.length;
        var mid = Math.floor(length * 0.5);
        var left = arr.slice(0, mid);
        var right = arr.slice(mid, length);
        contMerge += 5;
        if (length === 1) {
            contMerge++;
            return arr;
        }
        contMerge++;
        return conquer(sort(left), sort(right));
    }

   function conquer(left, right) {
      var sorted = [];
      var i = 0; //left tracker
      var j = 0; //right tracker
      contMerge += 5;
      while (i < left.length || j < right.length) {
          contMerge += 2;
          if (i < left.length && j < right.length) {
              contMerge += 3;
              if (left[i] < right[j]) {
                  sorted.push(left[i]);
                  i++;
              } else {
                  sorted.push(right[j]);
                  j++;
              }
          } else if (i < left.length) {
              sorted.push(left[i]);
              i++;
          } else {
              sorted.push(right[j]);
              j++;
          }
          contMerge += 3;
      }
      contMerge++;
      return sorted;
  }

  //--Fin metodo MergeSort--

  //--Metodo QuickSort--

  function quickSort(array, left, right, compare, swap) {
      contQuick++;
    console.log(contQuick);

      if (left < right) {
          contQuick += 2;
          console.log(contQuick);
          var pivot = partitionRandom(array, left, right, compare, swap);
          quickSort(array, left, pivot - 1, compare, swap);
          quickSort(array, pivot + 1, right, compare, swap);
          contQuick += 4;
          console.log(contQuick);
      }
      return array;
  }

  function partitionRandom(array, left, right, compare, swap) {
      var pivot = left + Math.floor(Math.random() * (right - left));
      contQuick += 5;
      console.log(contQuick);
      if (pivot !== right) {
          swap(array, right, pivot);
          contQuick++;
          console.log(contQuick);
      }
      contQuick++;
      console.log(contQuick);
      return partitionRight(array, left, right, compare, swap);
  }

  function partitionRight(array, left, right, compare, swap) {
      var mid = left;
      contQuick += 2;
      console.log(contQuick);
      for (var i = mid; i < right; i++) {
          contQuick += 4;
          console.log(contQuick);
          if (compare(array, i, right) <= 0) {
              contQuick++;
              console.log(contQuick);
              if (i !== mid) {
                  contQuick++;
                  console.log(contQuick);
                  swap(array, i, mid);
              }
              mid++;
              contQuick++;
              console.log(contQuick);
          }
      }
      contQuick++;
      console.log(contQuick);
      if (right !== mid) {
          contQuick++;
          console.log(contQuick);
          swap(array, right, mid);
      }
      return mid;
  }
  //--Fin metodo QuickSort--

    //Generacion de la grafica

    var ctx = document.getElementById("lienzo").getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrN,
            datasets: [{
                label: "Metodo de seleccion",
                data: arrPuntosS,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 1
            }, {
                label: "Metodo de la burbuja",
                data: arrPuntosB,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }, {
                label: "Metodo de insersion",
                data: arrPuntosIns,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1

            }, {
                label: "Metodo de MergeSort",
                data: arrPuntosMerge,
                backgroundColor: [
                    'rgba(122, 12,232, 0.2)'
                ],
                borderColor: [
                    'rgba(122, 12, 232, 1)'
                ],
                borderWidth: 1

            }, {
                label: "Metodo de QuickSort",
                data: arrPuntosQuick,
                backgroundColor: [
                    'rgba(247, 228,85, 0.2)'
                ],
                borderColor: [
                    'rgba(247, 228, 85, 1)'
                ],
                borderWidth: 1

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