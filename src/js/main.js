'use strict';

// Elemento de donde cogemos los datos
const nameElement = document.querySelector('.js-input-name');
const positionElement = document.querySelector('.js-input-job');
const emailElement = document.querySelector('.js-input-email');
const telephoneElement = document.querySelector('.js-input-telephone');
const linkedinElement = document.querySelector('.js-input-linkedin');
const githubElement = document.querySelector('.js-input-github');

// Elemento donde pintamos los datos
const name = document.querySelector('.js-card-name');
const job = document.querySelector('.js-card-job');
/*const email = document.querySelector('.js-icon-email');
const telephone = document.querySelector('.js-icon-telephone');
const linkedin = document.querySelector('.js-icon-linkedin');
const github = document.querySelector('.js-icon-github');*/

// recogemos datos de los inputs
const userData = {};
function getInputValues() {
  userData.name = nameElement.value;
  userData.job = positionElement.value;
  userData.email = emailElement.value;
  userData.telephone = telephoneElement.value;
  userData.linkedin = linkedinElement.value;
  userData.github = githubElement.value;
}

// Elemento de donde pintamos los datos
function updateCard(obj) {
  name.innerHTML = obj.name || 'Nombre Apellido';
  job.innerHTML = obj.job || 'Puesto de trabajo';
}

function result() {
  getInputValues();
  updateCard(userData);
}

// Pintamos (cogemos los datos del input)

nameElement.addEventListener('keyup', result);
positionElement.addEventListener('keyup', result);
emailElement.addEventListener('keyup', result);
telephoneElement.addEventListener('keyup', result);
linkedinElement.addEventListener('keyup', result);
githubElement.addEventListener('keyup', result);

//Mostrar iconos de contacto según se rellena el formulario
const iconTelephone = document.querySelector('.js-telephone');
const iconEmail = document.querySelector('.js-email');
const iconLinkedin = document.querySelector('.js-linkedin');
const iconGithub = document.querySelector('.js-github');


function showContactTelephone() {
  if (telephoneElement.value.length !== 0) {
    iconTelephone.classList.remove('hidden');
  } else {
    iconTelephone.classList.add('hidden');
  }
}
telephoneElement.addEventListener('keyup', showContactTelephone);

function showContactEmail() {
  if (emailElement.value.length !== 0) {
    iconEmail.classList.remove('hidden');
  } else {
    iconEmail.classList.add('hidden');
  }
}
emailElement.addEventListener('keyup', showContactEmail);

function showContactLinkedin() {
  if (linkedinElement.value.length !== 0) {
    iconLinkedin.classList.remove('hidden');
  } else {
    iconLinkedin.classList.add('hidden');
  }
}
linkedinElement.addEventListener('keyup', showContactLinkedin);

function showContactGithub() {
  if (githubElement.value.length !== 0) {
    iconGithub.classList.remove('hidden');
  } else {
    iconGithub.classList.add('hidden');
  }
}
githubElement.addEventListener('keyup', showContactGithub);



/*

function addEmail () {
  if (emailElement.value.length !== 0) { emailValidation(emailElement.value);
    if (emailValidation() === true) {
      iconEmail.classList.remove('hidden');
      href del iconEmail ?? = 'mailto: ${emailElement.value}';
    }
    else {
      dondesea.innerHTML ?? = 'Mensaje de error';
    }
  }
  else {
    iconEmail.classList.add('hidden');
  }
}

function emailValidation(emailValue) {
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue))) {
    return false;
  }
  else {
    return true;
  }
}

emailElement.addEventListener('keyup', addEmail);

//name and job validation (!(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(nameElement.value)))
//phone validation (!(/^[0-9]{9}/.test(telephoneElement.value)))
//linkedin and github validation idk

*/