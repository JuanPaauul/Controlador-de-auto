import {getPosition} from "./Autito";
import {moveCarAlong} from "./Autito";

describe("Autito ", () => {
  it("Deberia retornar la posicion del autito", () => {
    expect(getPosition("5,5")).toEqual("5,5");
  });
  it("Deberia retornar la posicion del autito", () => {
    expect(getPosition("1,3")).toEqual("1,3");
  });
  /*it("Deberia retornar la posicion del autito dando un paso adelante (por defecto apunta la Este)", () => {
    expect(moveCar("1,3/A")).toEqual(2,3);
  });Debido al formato UTF-16 de .lenght hay un problema al calcula una sola letra ya que esta devuelve 2 en lugar de 1*/
  it("Deberia retornar la posicion del autito dando dos paso adelante (por defecto apunta la Este)", () => {
    expect(moveCarAlong("5,5/1,3E/AA")).toEqual("3,3");
  });
  it("Deberia retornar la posicion del autito dando tres paso adelante (por defecto apunta la Este)", () => {
    expect(moveCarAlong("5,5/1,3E/AAA")).toEqual("4,3");
  });
  it("Deberia retornar la posicion del autito dando tres paso adelante hacia una direccion establecida", () => {
    expect(moveCarAlong("5,5/1,3S/AAA")).toEqual("1,0");
  });
  it("Deberia retornar la posicion del autito ahora incluyendo el paso a la izquierda", () => {
    expect(moveCarAlong("5,5/1,3S/AIA")).toEqual("2,2");
  });
  it("Deberia retornar la posicion del autito ahora incluyendo el paso a la derecha", () => {
    expect(moveCarAlong("5,5/1,3S/ADA")).toEqual("0,2");
  });
  it("Deberia retornar la posicion del autito ahora incluyendo el paso a la derecha", () => {
    expect(moveCarAlong("5,5/1,3S/ADAIADAI")).toEqual("0,1");
  });
  it("Deberia retornar la posicion del autito ahora incluyendo el paso a la derecha", () => {
    expect(moveCarAlong("5,5/1,3S/ADAIADAI")).toEqual("0,1");
  });
});
