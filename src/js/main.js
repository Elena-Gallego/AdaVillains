"use strict";

let userData = {
name: '',
job: '',
email: '',
phone: '',
linkedin: '',
github: '',
photo: '',
// userData.paletteCold = palette1Element.value;
// userData.palette2 = palette2Element.value;
// userData.palette3 = palette3Element.value;

palette: '',
}



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

  userData.photo = fr.result;
  localStorage.setItem('photo', userData.photo);
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
const phoneElement = document.querySelector(".js-input-telephone");
const linkedinElement = document.querySelector(".js-input-linkedin");
const githubElement = document.querySelector(".js-input-github");
// const palette1Element = document.querySelector("#palette-1");
// const palette2Element = document.querySelector("#palette-2");
// const palette3Element = document.querySelector("#palette-3");



// Elemento donde pintamos los datos
const name = document.querySelector(".js-card-name");
const job = document.querySelector(".js-card-job");
const email = document.querySelector(".js-icon-email");
// const phone = document.querySelector('.js-icon-telephone');
const linkedin = document.querySelector(".js-icon-linkedin");
const github = document.querySelector(".js-icon-github");
const photo = document.querySelector(".js__profile-image");
const responseURL = document.querySelector(".result-url");



// Paletas
// const inputsList = document.querySelectorAll(".js-palette");
// const palette = inputsList;
const palette = document.querySelectorAll(".js-palette");


const bar = document.querySelector(".card__id");
const iconSm = document.querySelectorAll(".contact__icon");
const photoDefault = document.querySelector(".card__photo");
const paletteCold = document.querySelector("#palette-1");
const paletteWarm = document.querySelector("#palette-2");
const paletteNeutral = document.querySelector("#palette-3");

function addInputsListeners() {
  for (const input of palette) {
    input.addEventListener("change", addPaletteClass);
  }
}

function addPaletteClass(evt) {
  // const inputValue = evt.currentTarget.value;
  // const palette = inputValue
 const paletteValue = evt.currentTarget.value;
  console.log(paletteValue);
  name.classList.remove("card__id_name");
  name.classList.remove("card__id_name2");
  name.classList.remove("card__id_name3");
  bar.classList.remove("card__id");
  bar.classList.remove("card__id2");
  bar.classList.remove("card__id3");
  photoDefault.classList.remove("card__photo");
  photoDefault.classList.remove("card__photo2");
  photoDefault.classList.remove("card__photo3");
  for (const icon of iconSm) {
    icon.classList.remove("contact__icon");
    icon.classList.remove("contact__icon2");
    icon.classList.remove("contact__icon3");
  }

  if (paletteValue === "1") {
    name.classList.add("card__id_name");
    bar.classList.add("card__id");
    photoDefault.classList.add("card__photo");
    //iconSm.classList.add('contact__icon');
    for (const icon of iconSm) {
      icon.classList.add("contact__icon");
    }
  } else if (paletteValue === "2") {
    name.classList.add("card__id_name2");
    bar.classList.add("card__id2");
    photoDefault.classList.add("card__photo2");
    for (const icon of iconSm) {
      icon.classList.add("contact__icon2");
    }
  } else {
    name.classList.add("card__id_name3");
    bar.classList.add("card__id3");
    photoDefault.classList.add("card__photo3");
    for (const icon of iconSm) {
      icon.classList.add("contact__icon3");
    }
  }
  // for (let input of palette){
  //   input.addEventListener("change", result);
  // }
}

addInputsListeners();

//console.log(inputList);

// ---- OBJETO (REVISAR)
// recogemos datos de los inputs
userData = {};
function getInputValues() {
  userData.name = nameElement.value;
  userData.job = positionElement.value;
  userData.email = emailElement.value;
  userData.phone = phoneElement.value;
  userData.linkedin = linkedinElement.value;
  userData.github = githubElement.value;
  userData.photo = fr.result;
  // userData.paletteCold = palette1Element.value;
  // userData.palette2 = palette2Element.value;
  // userData.palette3 = palette3Element.value;
  
 for (let item of palette){
  userData.palette = item.value;
 }

  // userData.name.classList.add("card__id_name");
  //   bar.classList.add("card__id");
  //   photoDefault.classList.add("card__photo");
  // CAMBIAR PALETTE

  setInLocalStorage();

  // function localStorage(data){
  //   userData.name.value = data.name

  //   }
  
}

function setInLocalStorage() {
  localStorage.setItem('data', JSON.stringify(userData));
}


const localImage = localStorage.getItem('photo');
if (localImage) {
  profileImage.style.backgroundImage = `url(${localImage})`;
  profilePreview.style.backgroundImage = `url(${localImage})`;
  userData.photo = localImage;
}


// function getFromLocalStorage(){
//   const dataFromLS = JSON.parse(localStorage.getItem('data'))
//   if (dataFromLS !== null){
//     userData = dataFromLS
//   } 
// } 


function getFromLocalStorage() {
  // return JSON.parse(localStorage.getItem('data')) || [] ;
  // userData.name = JSON.parse(localStorage.getItem('data'));
  // const dataFromLS = JSON.parse(localStorage.getItem('data'));
  // return dataFromLS === null ? [] : dataFromLS;
  const savedInfo = JSON.parse(localStorage.getItem('data'));
  function uploadInfo() {
    if (savedInfo !== null) {
    nameElement.value = savedInfo.name || '';
    positionElement.value = savedInfo.job || '';
    // AQUIIII
    emailElement.value = savedInfo.email || '';
    phoneElement.value = savedInfo.phone || '';
    linkedinElement.value = savedInfo.linkedin || '';
    githubElement.value = savedInfo.github || '';


    // profilePreview.style.backgroundImage =  `url(${dataUser.photo})`|| `url(./assets/images/p1.jpg)`;
    // profileImage.style.backgroundImage =  `url(${dataUser.photo})` || `url(./assets/images/p1.jpg)`;
    }

    
  
  }
  uploadInfo();
}



// Elemento de donde pintamos los datos


function updateCard(obj) {
  name.innerHTML = obj.name || "Nombre Apellido";
  job.innerHTML = obj.job || "Puesto de trabajo";

  email.setAttribute("href", "mailto:" + obj.email);
  linkedin.setAttribute("href", obj.linkedin);
  github.setAttribute("href", "https://github.com/", obj.github);
  // for(let item of palette){
  //   item.setAttribute("value", obj.palette)
  // }
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
phoneElement.addEventListener("keyup", result);
linkedinElement.addEventListener("keyup", result);
githubElement.addEventListener("keyup", result);
// paletteCold.addEventListener("keyup", result);
// paletteWarm.addEventListener("keyup", result);
// paletteNeutral.addEventListener("keyup", result);


//Mostrar iconos de contacto según se rellena el formulario
const iconTelephone = document.querySelector(".js-telephone");
const iconEmail = document.querySelector(".js-email");
const iconLinkedin = document.querySelector(".js-linkedin");
const iconGithub = document.querySelector(".js-github");

function showContactTelephone() {
  if (phoneElement.value.length !== 0) {
    iconTelephone.classList.remove("hidden");
  } else {
    iconTelephone.classList.add("hidden");
  }
}
phoneElement.addEventListener("keyup", showContactTelephone);

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

// Colapsables

const collapsibleTriggers = document.querySelectorAll(
  ".js-collapsible__trigger"
);

function updateCollapsible(event) {
  const currentCollapsible = event.currentTarget.parentElement;

  if (currentCollapsible.classList.contains("collapsable--open")) {
    currentCollapsible.classList.remove("collapsable--open");
  } else {
    for (const item of collapsibleTriggers) {
      item.parentElement.classList.remove("collapsable--open");
    }
    currentCollapsible.classList.add("collapsable--open");
  }
}

for (const item of collapsibleTriggers) {
  item.addEventListener("click", updateCollapsible);
}

// Botón de reset
const resetButton = document.querySelector(".js-button-reset");
const photoPreviewElement = document.querySelector(".js__profile-preview");
const contactList = document.querySelector(".js-contact__list");

function resetForm() {
  nameElement.value = "";
  positionElement.value = "";
  emailElement.value = "";
  phoneElement.value = "";
  linkedinElement.value = "";
  githubElement.value = "";
  photoPreviewElement.style = "";
  photo.style = "";
}

function resetCard() {
  name.innerHTML = "Nombre Apellido";
  job.innerHTML = "Puesto de trabajo";
  contactList.classList.add("hidden");
}

function resetData() {
  resetForm();
  resetCard();
}

resetButton.addEventListener("click", resetData);

const buttonShare = document.querySelector(".js-button__share");

// CREA TARJETA
buttonShare.addEventListener("click", handlerClick);

function handlerClick(event) {
  event.preventDefault(), sendRequest(userData);
}

// // MANDAR DATOS
// function sendData(objectData){

//   sendRequest(userData);
// }

// FETCH
function sendRequest(objectData) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(objectData),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });

}



const twitterContainer = document.querySelector(".js-twitter");
const twitterButton = document.querySelector(".js-twitter-button");

function showURL(result) {
  if (result.success) {
    twitterContainer.classList.remove("hidden");
    const tweet = "¡Mira mi tarjeta de visita de AdaVillana!";

    responseURL.innerHTML = `${result.cardURL}<a href="${result.cardURL}" target="_blank" ></a>`;
    twitterButton.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=${tweet}&url=${result.cardURL}`
    );
  } else {
    responseURL.innerHTML = "ERROR:" + result.error;
  }
}

getFromLocalStorage()



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
//inkedin and github validation idk*/
