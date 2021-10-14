import {sumNumbers} from "./ContadorCadenas";

describe("Calculadora de cadenar ", () => {
  it("Deberia retornar el numero en formato int", () => {
    expect(sumNumbers("[]1")).toEqual(1);
  });
  /*it("Deberia retornar una lista de enteros", () => {
    expect(listOfNumbers("1,2,3")).toEqual([1,2,3]);
  });*/
  //No funciona y no se por que :(
  it("Deberia retornar la suma de 2 numeros en formato string", () => {
    expect(sumNumbers("[,]1,2")).toEqual(3);
  });
  it("Deberia retornar la suma de n numeros en formato string", () => {
    expect(sumNumbers("[,]1,2,3,4,5")).toEqual(15);
  });
  it("Deberia retornar la suma de n numeros separador por un guion", () => {
    expect(sumNumbers("[-]1-2-3-4-5")).toEqual(15);
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
