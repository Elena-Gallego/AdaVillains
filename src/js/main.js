"use strict";
//Listeners Customizer

const nameElement = document.querySelector(".js-input-name");
function writeCard() {
  const name = document.querySelector(".js-card-name");
  name.innerHTML = nameElement.value;
}
nameElement.addEventListener("keyup", writeCard);
