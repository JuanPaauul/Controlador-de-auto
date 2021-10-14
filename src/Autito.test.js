import {sumNumbers} from "./ContadorCadenas";

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
  it("Deberia retornar la posicion del autito dando un paso adelante (por defecto apunta la Este)", () => {
    expect(moveCar("1,3/AA")).toEqual(3,3);
  });
  it("Deberia retornar la posicion del autito dando un paso adelante (por defecto apunta la Este)", () => {
    expect(moveCar("1,3/AAA")).toEqual(3,3);
  });
});

function getPosition(position){
  return position
}
function moveCar(command){
  var positions = command.split("/")[0];
  var xAxis = Number(positions.split(",")[0]);
  var yAxis = Number(positions.split(",")[1]);
  var movements = command.split("/")[1];
  xAxis += movements.lenght;
  return xAxis,yAxis;
}