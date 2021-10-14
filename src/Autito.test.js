import {sumNumbers} from "./ContadorCadenas";

describe("Autito ", () => {
  it("Deberia retornar la posicion del autito", () => {
    expect(getPosition("5,5")).toEqual("5,5");
  });
  it("Deberia retornar la posicion del autito", () => {
    expect(getPosition("1,3")).toEqual("1,3");
  });
  it("Deberia retornar la posicion del autito dando un paso adelante (por defecto apunta la Este)", () => {
    expect(moveCar("1,3/A")).toEqual("2,3");
  });
});

function getPosition(position){
  return position
}
function moveCar(command){
  return "2,3"
}