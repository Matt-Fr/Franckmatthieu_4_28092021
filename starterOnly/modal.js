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

// error message firstName

form.addEventListener("click", () => {
  const inputValueFirst = document.getElementById("first").value.trim();

  if (inputValueFirst.length < 2) {
    document.getElementsByClassName("error-msg")[0].style.display = "block";
  } else {
    document.getElementsByClassName("error-msg")[0].style.display = "none";
  }
});

// error message lastname

form.addEventListener("click", () => {
  const inputValueLast = document.getElementById("last").value.trim();

  if (inputValueLast.length < 2) {
    document.getElementsByClassName("error-msg")[1].style.display = "block";
  } else {
    document.getElementsByClassName("error-msg")[1].style.display = "none";
  }
});

//email adress regex

form.addEventListener("click", () => {
  const inputValueEmail = document.getElementById("email").value;
});

//check Age with regex

//checkbox

form.addEventListener("click", () => {
  const checkbox = document.getElementById("checkbox1");
  // const checkboxChecked = checkbox.checked

  if (checkbox.checked === false) {
    document.getElementsByClassName("error-msg")[2].style.display = "block";
  } else {
    document.getElementsByClassName("error-msg")[2].style.display = "none";
  }
});

//prevent form to close

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
