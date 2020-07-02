"use strict";

//VALIDACIÓN DE INPUTS

// Elemento de donde cogemos los datos
const nameElement = document.querySelector(".js-input-name");
const positionElement = document.querySelector(".js-input-position");
const emailElement = document.querySelector(".js-input-email");
const telephoneElement = document.querySelector(".js-input-telephone");
const linkedinElement = document.querySelector(".js-input-linkedin");
const githubElement = document.querySelector(".js-input-github");

// Elemento donde pintamos los datos
const name = document.querySelector(".js-card-name");
const position = document.querySelector(".js-card-position");
const email = document.querySelector(".js-card-email");
const telephone = document.querySelector(".js-card-telephone");
const linkedin = document.querySelector(".js-card-linkedin");
const github = document.querySelector(".js-card-github");

// recogemos datos de los inputs
const userData = {};
function getInputValues() {
  userData.name = nameElement.value;
  userData.position = positionElement.value;
  userData.email = emailElement.value;
  userData.telephone = telephoneElement.value;
  userData.linkedin = linkedinElement.value;
  userData.github = githubElement.value;
}

// Elemento de donde pintamos los datos
function updateCard(obj) {
  name.innerHTML = obj.name;
  position.innerHTML = obj.position;
  email.innerHTML = obj.email;
  telephone.innerHTML = obj.telephone;
  linkedin.innerHTML = obj.Linkedin;
  github.innerHTML = obj.github;
}

function result() {
  getInputValues();
  updateCard(userData);
}

// Pintamos (cogemos los datos del input)
// function updateCard(){
//   name.innerHTML = userData(name)
// }

nameElement.addEventListener("keyup", result);
positionElement.addEventListener("keyup", result);
emailElement.addEventListener("keyup", result);
telephoneElement.addEventListener("keyup", result);
linkedinElement.addEventListener("keyup", result);
githubElement.addEventListener("keyup", result);

//Listeners Customizer
// const nameElement = document.querySelector('.js-input-name');
// function writeCard() {
//   const name = document.querySelector('.js-card-name');
//   name.innerHTML = nameElement.value;
// }
// nameElement.addEventListener('keyup', writeCard);

//ACTIVAR LAS SECCIONES DEPLEGABLES MEDIANTE CLIC EN FLECHAS

//container cerrar secciones
const closeDesign = document.querySelector(".js-close-design");
const closeFill = document.querySelector(".js-close-fill");
const closeShare = document.querySelector(".js-close-share");
//container abrir secciones
const openDesign = document.querySelector(".js-open-design");
const openFill = document.querySelector(".js-open-fill");
const openShare = document.querySelector(".js-open-share");

//botones de flechas
const arrowButton = document.querySelector(".js-arrow-button");
const arrowButton2 = document.querySelector(".js-arrow-button-2");
const arrowButton3 = document.querySelector(".js-arrow-button-3");

//inicio de secciones

function displayDesign() {
  openDesign.classList.toggle("hidden");
  arrowButton.classList.toggle("arrow-rotation");
}
closeDesign.addEventListener("click", displayDesign);

function displayFill() {
  openFill.classList.toggle("hidden");
  arrowButton2.classList.toggle("arrow-rotation");
}
closeFill.addEventListener("click", displayFill);

function displayShare() {
  openShare.classList.toggle("hidden");
  arrowButton3.classList.toggle("arrow-rotation");
}
closeShare.addEventListener("click", displayShare);
