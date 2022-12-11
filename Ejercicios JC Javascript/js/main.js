//Ejercicio 1.
function numMay(num) {
    let mayor = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] > mayor) {
        mayor = num[i];
      }
    }
    return mayor;
  }
  
  let num = [3, 5, 7, 1, 6];
  console.log(numMay(num));
  
  //Ejercicio 2.

  function numMen(num) {
    let ordenarNum =num.sort();
    let menor = ordenarNum;
  
    return menor[0];
  }
  num = [-1, 3, 4, 2, 6];
  console.log(numMen(num));
  
  //Ejercicio 3.
  function numRep(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i]==num[i+1]) {
        return `El número ${num[i]} se encuentra más de una vez `;
      } else {
        return("No hay números repetidos")
      }
    }
  }
  num = [7, 41, 5, 10, 10, 13, 2].sort();
  console.log(num);
  console.log(numRep(num));
  
  //Ejercicio 4.
  const desordenado = ar => ar.sort(() => Math.random()-0.5);
  
  num = [1, 2, 5, 14, 24, 31, 50, 105];
  console.log("Números Ordenados: "+ num);
  console.log("Números Desordenados: "+ desordenado(num));
  
  
  //Segunda Parte 
  let btneje1 = document.getElementById("btneje1");
  btneje1.addEventListener("click", function (event){
      event.preventDefault();
      let num1 = parseInt(document.getElementById("inputNum1").value);
      let num2 = parseInt(document.getElementById("inputNum2").value);
      let num3 = parseInt(document.getElementById("inputNum3").value);
      let Result = document.getElementById("alarma1");
      
      let num = [num1,num2,num3];
      Result.innerHTML= numMay(num);
  });
  
  let btneje2 = document.getElementById("btneje2");
  btneje2.addEventListener("click", function (event) {
      event.preventDefault();
      let num1 = parseInt(document.getElementById("inputNum1").value);
      let num2 = parseInt(document.getElementById("inputNum2").value);
      let num3 = parseInt(document.getElementById("inputNum3").value);
      let Result = document.getElementById("alarma2");
      if ((num1 >= 0 && num1 <=100) && (num2 >= 0 && num2 <=100) &&  (num3 >= 0 && num3 <=100))
      {
          let num = [num1,num2,num3];
          Result.innerHTML = numMen(num);
      }else{
          Result.innerHTML = "Debes ingresar numeros entre el 1 y el 100";
      }
  } );
  
  //Ejercicio 3. Adivinar un numero aleatorio.
  function getRandom(min, max) {
      return Math.random() * (max - min) + min;
  }
  
    let btneje3 = document.getElementById("btneje3");
    btneje3.addEventListener("click", function(event){
      event.preventDefault();
      let resultado = document.getElementById("alarma3");
      resultado.innerHTML=parseInt(getRandom(0,100)) ;
   })
    
   //Ejercicio 4.
   //Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
   function multiplo3(nums){
      if (nums >= 100 && nums <= 200) {
          if((nums % 3)==0){
              return `El número ${nums} es multiplo de 3`
          }
          else{
              return "El número que ingresaste no es multiplo de 3"
          }
      } else {
          return "El número ingresado debe ser entre el 100 y el 200"
      }
   }
  
   let btneje4 = document.getElementById("btneje4");
   btneje4.addEventListener("click", function(event){
      event.preventDefault();
      let numEnt = parseInt(document.getElementById("inputNumEnt").value) ;
      let resultado = document.getElementById("alarma4");
      resultado.innerHTML = multiplo3(numEnt);
   });