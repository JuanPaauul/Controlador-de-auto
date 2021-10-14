function getDelimitator(numString){
  var delimitator = numString.split("]")[0];
  return delimitator.split("[")[1];
}
function stringToInt(numString){
  return parseInt(numString);
}
function listOfNumbers(listString=",", delimitador){
  var listOfNumbersString = listString.split(delimitador);
  var numbersList = [];
  for (let i = 0; i < listOfNumbersString.length; i++){
    numbersList.push(stringToInt(listOfNumbersString[i]));
  }
  return numbersList;
}
export function sumNumbers(listString){
  var numeros = listOfNumbers(listString.split("]")[1],getDelimitator(listString));
  var suma = 0;
  numeros.forEach (function(numero){
    if(numero<1000)
      suma += numero;
  });
  return suma;
}
function sumNumbersGuion(listString){
  var numeros = listOfNumbers(listString,"-"), suma = 0;
    numeros.forEach (function(numero){
      if(numero<1000)
        suma += numero;
    });
  return suma;
}
function sumNumbersComa(listString){
  var numeros = listOfNumbers(listString,","), suma = 0;
    numeros.forEach (function(numero){
      if(numero<1000)
        suma += numero;
    });
  return suma;
}
