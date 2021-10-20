const editNav = () => {
  var x = document.getElementById("myTopnav");
  x.className =
    x.className === "topnav" ? `${x.className} responsive` : "topnav";
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const email = document.getElementById("email");
const content = document.querySelector(".content");
const popup = document.querySelector(".content-2");
const birthdate = document.getElementById("birthdate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  content.style.display = "block";
  popup.style.display = "none";
}

// Close modal form

const closeModal = document.querySelector(".close");

closeModal.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// check if first name is valid

function checkFirstName() {
  const inputValueFirst = document.getElementById("first").value.trim();

  const isFirstValid = inputValueFirst.length >= 2;
  document.getElementsByClassName("error-msg")[0].style.display = isFirstValid
    ? "none"
    : "block";
  return isFirstValid;
}

// check if last name is valid

function checkLastName() {
  const inputValueLast = document.getElementById("last").value.trim();

  const isLastValid = inputValueLast.length >= 2;
  document.getElementsByClassName("error-msg")[1].style.display = isLastValid
    ? "none"
    : "block";
  return isLastValid;
}

// check if email is valid

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function checkEmail() {
  const emailValue = document.getElementById("email").value.trim();
  const isEmailValid = isEmail(emailValue);
  document.getElementsByClassName("error-msg")[2].style.display = isEmailValid
    ? "none"
    : "block";
  return isEmailValid;
}

//check birthdate

function checkBirthdate() {
  const birthday = new Date(document.getElementById("birthdate").value);
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  const isBirthdateValid = birthday < today;
  document.getElementsByClassName("error-msg")[3].style.display =
    isBirthdateValid ? "none" : "block";
  return isBirthdateValid;
}

// check if number of tournament is not empty

function checkTournament() {
  const nbTournament = document.getElementById("quantity");
  const inputValueQuantity = nbTournament.value.trim();
  const isTournamentValid = inputValueQuantity.length !== 0;

  document.getElementsByClassName("error-msg")[4].style.display =
    isTournamentValid ? "none" : "block";
  return isTournamentValid;
}

// check if the first checkbox is checked

function checkCheckbox() {
  const checkbox = document.getElementById("checkbox1");

  const isCheckboxValid = checkbox.checked;
  document.getElementsByClassName("error-msg")[5].style.display =
    isCheckboxValid ? "none" : "block";
  return isCheckboxValid;
}

//prevent form to close if errors

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;
  isFormValid = checkFirstName() && isFormValid;
  isFormValid = checkLastName() && isFormValid;
  isFormValid = checkTournament() && isFormValid;
  isFormValid = checkEmail() && isFormValid;
  isFormValid = checkBirthdate() && isFormValid;
  isFormValid = checkCheckbox() && isFormValid;

  if (isFormValid) {
    content.style.display = "none";
    popup.style.display = "block";
    form.reset();
  } else {
    // alert("Une erreur a été rencontrée.");
  }
});

//close modal form with popup

const closePopup = document.querySelector("#close-popup");
closePopup.addEventListener("click", function () {
  modalbg.style.display = "none";
});
