function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const email = document.getElementById("email");
const content = document.querySelector(".content");
const popup = document.querySelector(".content-2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form

const closeModal = document.querySelector(".close");

closeModal.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// check if first name is valid

function checkFirstName() {
  const inputValueFirst = document.getElementById("first").value.trim();

  const isFirstValid = inputValueFirst && inputValueFirst.length >= 2;
  document.getElementsByClassName("error-msg")[0].style.display = isFirstValid
    ? "none"
    : "block";
  return isFirstValid;
}

// check if last name is valid

function checkLastName() {
  const inputValueLast = document.getElementById("last").value.trim();

  const isLastValid = inputValueLast && inputValueLast.length >= 2;
  document.getElementsByClassName("error-msg")[1].style.display = isLastValid
    ? "none"
    : "block";
  return isLastValid;
}

// check if email is valid

// function isEmail(email) {
//   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }
// const emailValue = document.getElementById("email").value.trim();
// function checkEmail(isEmail(emailValue)){

// const isEmailValid = emailValue && isEmail(emailValue)
// document.getElementsByClassName("error-msg")[2].style.display = isEmailValid
// ? "none"
// : "block";
// return isEmailValid;
// }

// check if number of tournament is not empty

function checkTournament() {
  const nbTournament = document.getElementById("quantity");
  const inputValueQuantity = nbTournament.value.trim();
  const isTournamentValid =
    inputValueQuantity && inputValueQuantity.length !== 0;

  document.getElementsByClassName("error-msg")[4].style.display =
    isTournamentValid ? "none" : "block";
  return isTournamentValid;
}

// check if the first checkbox is checked

function checkCheckbox() {
  const checkbox = document.getElementById("checkbox1");

  const isCheckboxValid = checkbox && checkbox.checked;
  document.getElementsByClassName("error-msg")[5].style.display =
    isCheckboxValid ? "none" : "block";
  return isCheckboxValid;
}

//prevent form to close if errors

form.addEventListener("submit", (e) => {
  // A faire d'office peu importe le résultat de la validité du formulaire
  e.preventDefault();

  let isFormValid = true;
  isFormValid = checkFirstName() && isFormValid;
  isFormValid = checkLastName() && isFormValid;
  isFormValid = checkTournament() && isFormValid;
  isFormValid = checkCheckbox() && isFormValid;

  if (isFormValid) {
    content.style.display = "none";
    popup.style.display = "block";
  } else {
    alert("Une erreur a été rencontrée.");
  }
});

// //close modal form with popup

const closePopup = document.querySelector("#close-popup");
closePopup.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// error message firstName

// form.addEventListener("click", () => {
//   const inputValueFirst = document.getElementById("first").value.trim();

//   if (inputValueFirst.length < 2) {
//     document.getElementsByClassName("error-msg")[0].style.display = "block";
//     return false;
//   } else {
//     document.getElementsByClassName("error-msg")[0].style.display = "none";
//     return true;
//   }
// });

// // error message lastname

// form.addEventListener("click", () => {
//   const inputValueLast = document.getElementById("last").value.trim();

//   if (inputValueLast.length < 2) {
//     document.getElementsByClassName("error-msg")[1].style.display = "block";
//   } else {
//     document.getElementsByClassName("error-msg")[1].style.display = "none";
//   }
// });

// //email adress regex
// const inputValueEmail = document.getElementById("email").value;

// function isEmail(inputValueEmail) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     inputValueEmail
//   );
// }

// form.addEventListener("click", () => {
//   if (!isEmail(inputValueEmail)) {
//     document.getElementsByClassName("error-msg")[2].style.display = "block";
//   } else {
//     document.getElementsByClassName("error-msg")[2].style.display = "none";
//   }
// });

// check number of tournaments
// const inputValueQuantity = document.getElementById("quantity").value.trim();
// form.addEventListener("click", () => {
//   const inputValueQuantity = document.getElementById("quantity").value.trim();

//   if (inputValueQuantity.length > 0) {
//     document.getElementsByClassName("error-msg")[3].style.display = "block";
//   } else {
//     document.getElementsByClassName("error-msg")[3].style.display = "none";
//   }
// });

// //check Age

// const birthdate = document.getElementById("birthdate").value;

// form.addEventListener("click", () => {
//   if (birthdate.length !== 10) {
//     document.getElementsByClassName("error-msg")[4].style.display = "block";
//   } else {
//     document.getElementsByClassName("error-msg")[4].style.display = "none";
//   }
// });

// //checkbox

// form.addEventListener("click", () => {
//   const checkbox = document.getElementById("checkbox1");
//   // const checkboxChecked = checkbox.checked

//   if (checkbox.checked === false) {
//     document.getElementsByClassName("error-msg")[5].style.display = "block";
//   } else {
//     document.getElementsByClassName("error-msg")[5].style.display = "none";
//   }
// });
