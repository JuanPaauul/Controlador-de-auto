import {moveCarAlong} from "./Autito";

const comands = document.querySelector("#comands-input");
const form = document.querySelector("#comand-form");
const initialPositionText = document.querySelector("#initial-position");
const comandsSentText = document.querySelector("#comands-sent");
const finalPositionText = document.querySelector("#final-position");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var comandos = comands.value;
  var posicionInicial = moveCarAlong(comandos);
  finalPositionText.innerHTML = "<p>" + posicionInicial[0] + "</p>";
  initialPositionText.innerHTML = "<p>" + posicionInicial[1] + "</p>";
  comandsSentText.innerHTML = "<p>" + posicionInicial[2] + "</p>";
});
