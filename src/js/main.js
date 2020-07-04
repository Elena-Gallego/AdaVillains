"use strict";

// Botón de subir imagen
const fr = new FileReader();
const uploadBtn = document.querySelector(".js__profile-trigger");
const fileField = document.querySelector(".js__profile-upload-btn");
let profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);

// Elemento de donde cogemos los datos
const nameElement = document.querySelector(".js-input-name");
const positionElement = document.querySelector(".js-input-job");
const emailElement = document.querySelector(".js-input-email");
const telephoneElement = document.querySelector(".js-input-telephone");
const linkedinElement = document.querySelector(".js-input-linkedin");
const githubElement = document.querySelector(".js-input-github");

// Elemento donde pintamos los datos
const name = document.querySelector(".js-card-name");
const job = document.querySelector(".js-card-job");
const email = document.querySelector(".js-icon-email");
// const telephone = document.querySelector('.js-icon-telephone');
const linkedin = document.querySelector(".js-icon-linkedin");
const github = document.querySelector(".js-icon-github");
const photo = document.querySelector(".js__profile-image");

// ---- OBJETO (REVISAR)
// recogemos datos de los inputs
const userData = {};
function getInputValues() {
  userData.name = nameElement.value;
  userData.job = positionElement.value;
  userData.email = emailElement.value;
  userData.telephone = telephoneElement.value;
  userData.linkedin = linkedinElement.value;
  userData.github = githubElement.value;
  userData.photo = photo.src;
}

// Elemento de donde pintamos los datos
function updateCard(obj) {
  name.innerHTML = obj.name || "Nombre Apellido";
  job.innerHTML = obj.job || "Puesto de trabajo";
  email.setAttribute("href", "mailto:" + obj.email);
  linkedin.setAttribute("href", obj.linkedin);
  github.setAttribute("href", "https://github.com/", obj.github);
}
console.log(email);

function result() {
  getInputValues();
  updateCard(userData);
}

// Pintamos (cogemos los datos del input)

nameElement.addEventListener("keyup", result);
positionElement.addEventListener("keyup", result);
emailElement.addEventListener("keyup", result);
telephoneElement.addEventListener("keyup", result);
linkedinElement.addEventListener("keyup", result);
githubElement.addEventListener("keyup", result);

//Mostrar iconos de contacto según se rellena el formulario
const iconTelephone = document.querySelector(".js-telephone");
const iconEmail = document.querySelector(".js-email");
const iconLinkedin = document.querySelector(".js-linkedin");
const iconGithub = document.querySelector(".js-github");

function showContactTelephone() {
  if (telephoneElement.value.length !== 0) {
    iconTelephone.classList.remove("hidden");
  } else {
    iconTelephone.classList.add("hidden");
  }
}
telephoneElement.addEventListener("keyup", showContactTelephone);

function showContactEmail() {
  if (emailElement.value.length !== 0) {
    iconEmail.classList.remove("hidden");
  } else {
    iconEmail.classList.add("hidden");
  }
}
emailElement.addEventListener("keyup", showContactEmail);

function showContactLinkedin() {
  if (linkedinElement.value.length !== 0) {
    iconLinkedin.classList.remove("hidden");
  } else {
    iconLinkedin.classList.add("hidden");
  }
}
linkedinElement.addEventListener("keyup", showContactLinkedin);

function showContactGithub() {
  if (githubElement.value.length !== 0) {
    iconGithub.classList.remove("hidden");
  } else {
    iconGithub.classList.add("hidden");
  }
}
githubElement.addEventListener("keyup", showContactGithub);

function validatePhone(phone) {
  const ph = /^([9,7,6]{1})+([0-9]{8})$/;

  return ph.test(phone);
}





//Validación Formulario-ANA
//Para el telefono y el mail se puede utilizar el metodo test (expresiones regulares)

const username = document.querySelector("#name");
const userjob = document.querySelector("#job");
const userimage = document.querySelector("#img-selector");
const useremail = document.querySelector("#email");
const usertelephone = document.querySelector("#telephone");
const userlinkedin = document.querySelector("#linkedin");
const usergithub = document.querySelector("#github");


function userNameValidation() {
  if (username.value === null || username.value === "");
  username.classList.add("js-errorborder");
  username.nextElementSibling.classList.add(".js-error-message"); 
}
  else {
    if (username.value === null || username.value === "");
  username.classList.remove("js-errorborder");
  username.nextElementSibling.classList.remove(".js-error-message");
  }
}

function userJobValidation() {

  if (userjob.value === null || username.value === "");
  userjob.classList.add("js-errorborder");
  userjob.nextElementSibling.classList.add(".js-error-message"); 
}
  else {
    if (userjob.value === null || userjob.value === "");
  userjob.classList.remove("js-errorborder");
  userjob.nextElementSibling.classList.remove(".js-error-message");
  }
}

// /*if (userimage.value === null || username.value === "") {
 //   userimage.classList.add('js-border-input');
// } else {
//   userimage.classList.remove('js-border-input');
// }*/


function userEmailValidation() {
  if (useremail.value === '' || !validateEmail(useremail.value)) {
    //!useremail.value.incluye('@')
    useremail.classList.add("js-errorborder");
    useremail.nextElementSibling.classList.add('.js-error-message');
  } else {
    useremail.classList.remove("js-errorborder");
    useremail.nextElementSibling.classList.remove(".js-error-message");
  }
}
function userTelephoneValidation() {
  if (usertelephone.value === '' || !validatePhone(usertelephone.value)) {
    usertelephone.classList.add("js-errorborder");
    usertelephone.nextElementSibling.classList.add('js-error-message');
  } else {
    usertelephone.classList.remove('js-border-input');
    usertelephone.nextElementSibling.classList.remove('js-error-message');
  }
}

function validateEmail(email) {
  const em = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return em.test(email);
}

function validatePhone(phone) {
  const ph = /^([9,7,6]{1})+([0-9]{8})$/;
  return ph.test(phone);
}


function userLinkedinValidation() {
  if (userlinkedin.value === '') {
    userlinkedin.classList.add("js-errorborder");
    userlinkedin.nextElementSibling.classList.add("js-error-message");
  } else {
    userlinkedin.classList.remove('');
    userlinkedin.nextElementSibling.classList.remove("js-error-message");
  }
}

function UserGithubValidation() {
  if (usergithub.value === '') {
    usergithub.classList.add("js-errorborder");
    usergithub.nextElementSibling.classList.add("js-error-message");
  } else {
    usergithub.classList.remove("js-errorborder");
    usergithub.nextElementSibling.classList.remove("js-error-message");
  }
}


//Listener

username.addEventListener("keyup", userNameValidation);
userjob.addEventListener("keyup", userJobValidation);
useremail.addEventListener('keyup', userEmailValidation);
usertelephone.addEventListener('keyup', userTelephoneValidation);
userlinkedin.addEventListener('keyup', userLinkedinValidation);
usergithub.addEventListener('keyup', UserGithubValidation);