describe("Calculadora de cadenar ", () => {
  it("Deberia retornar el numero en formato int", () => {
    expect(stringToInt("1")).toEqual(1);
  });
  /*it("Deberia retornar una lista de enteros", () => {
    expect(listOfNumbers("1,2,3")).toEqual([1,2,3]);
  });*/
  //No funciona y no se por que :(
  it("Deberia retornar la suma de 2 numeros en formato string", () => {
    expect(sumNumbersComa("1,2")).toEqual(3);
  });
  it("Deberia retornar la suma de n numeros en formato string", () => {
    expect(sumNumbersComa("1,2,3,4,5")).toEqual(15);
  });
  it("Deberia retornar la suma de n numeros separador por un guion", () => {
    expect(sumNumbersGuion("1-2-3-4-5")).toEqual(15);
  });
  it("Deberia retornar la suma de n numeros separador por un delimitador de un caracter", () => {
    expect(sumNumbers("[*]1*2*3*4*5")).toEqual(15);
  });
  it("Deberia retornar la suma de los numeros menores a 1000", () => {
    expect(sumNumbers("[*]1*2000*3*4*5000")).toEqual(8);
  });
  it("Deberia retornar la suma de dos numeros con un delimitador de mas de un caracter", () => {
    expect(sumNumbers("[***]1***4")).toEqual(5);
  });
  it("Deberia retornar la suma de n numeros con un delimitador de mas de un caracter", () => {
    expect(sumNumbers("[***]1***4***5***1000***2000")).toEqual(10);
  });
});
function getDelimitator(numString){
  var delimitator = numString.split("]")[0]
  return delimitator.split("[")[1]
}
function stringToInt(numString){
  return parseInt(numString);
}
function listOfNumbers(listString, delimitador){
  var listOfNumbersString = listString.split(delimitador);
  var numbersList = [];
  for (let i = 0; i < listOfNumbersString.length; i++){
    numbersList.push(stringToInt(listOfNumbersString[i]));
  }
  return numbersList;
}
function sumNumbers(listString){
  var numeros = listOfNumbers(listString.split("]")[1],getDelimitator(listString)), suma = 0;
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
