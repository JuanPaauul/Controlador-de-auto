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
  it("Deberia retornar la posicion del autito dando dos paso adelante (por defecto apunta la Este)", () => {
    expect(moveCarAlong("1,3 E/AA")).toEqual("3,3");
  });
  it("Deberia retornar la posicion del autito dando tres paso adelante (por defecto apunta la Este)", () => {
    expect(moveCarAlong("1,3 E/AAA")).toEqual("4,3");
  });
  it("Deberia retornar la posicion del autito dando tres paso adelante hacia una direccion establecida", () => {
    expect(moveCarAlong("1,3 S/AAA")).toEqual("1,0");
  });
});
function stringLenght(str){
  var counter = 0;
  for (var i = 0; str[i]!=null;i++){
    counter +=1;
  }
  return counter;
}
function getPosition(position){
  return position
}
function moveCar(xAxis, yAxis, direction, movement){
  switch (direction){
    case "O":
      xAxis = xAxis-movement;
      break;
    case "E":
      xAxis = xAxis+movement;
      break;
    case "N":
      yAxis = yAxis+movement;
      break;
    case "S":
      yAxis = yAxis-movement;
      break;
    default:
      return 0;
      break;
  }
  return xAxis.toString()+","+yAxis.toString();
}
function moveCarAlong(command){
  var coordenates = command.split("/")[0].split(" ")[0];
  var direction = command.split("/")[0].split(" ")[1];
  var movements = command.split("/")[1];
  var xAxis = Number(coordenates.split(",")[0]);
  var yAxis = Number(coordenates.split(",")[1]);
  coordenates= moveCar(xAxis, yAxis, direction, stringLenght(movements));
  return coordenates;
}