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
  it("Deberia retornar la posicion del autito ahora incluyendo el paso a la izquierda", () => {
    expect(moveCarAlong("1,3 S/AIA")).toEqual("2,2");
  });
  it("Deberia retornar la posicion del autito ahora incluyendo el paso a la izquierda", () => {
    expect(moveCarAlong("1,3 S/ADA")).toEqual("0,2");
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
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
function adjustDirection(currentDirection, newDirection){
  var cardinalPoints = {
    "O":180,
    "E":0, 
    "N":90, 
    "S":270
  };
  var cardinalPointsInverted = {
    180:"O",
    0:"E", 
    90:"N", 
    270:"S"
  };
  var directionAngles = {
    "D":-90,
    "I":90
  };
  var directionUpdated = cardinalPoints[currentDirection] + directionAngles[newDirection];
  if (directionUpdated<0)
    directionUpdated += 360;
  if(directionUpdated == 360)
    directionUpdated = 0;
  return cardinalPointsInverted[directionUpdated];
}
function moveCar(xAxis, yAxis, direction, movement = 1){
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
  var listAxis = [xAxis,yAxis]
  return listAxis;
}
function moveCarAlong(command){
  var direction = command.split("/")[0][stringLenght(command.split("/")[0])-1];
  var coordenates = command.split("/")[0].split(direction)[0];
  var movements = command.split("/")[1];
  let listAxis = [Number(coordenates.split(",")[0]),Number(coordenates.split(",")[1])]
  for (var i = 0; movements[i]!=null;i++){
    if(movements[i] != "A"){
      direction = adjustDirection(direction,movements[i]);
    }else{
      listAxis = moveCar(listAxis[0], listAxis[1], direction);
    }
  }
  
  return (""+listAxis[0]).toString()+","+ (""+listAxis[1]).toString();
}