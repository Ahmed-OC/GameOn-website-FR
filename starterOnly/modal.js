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
const closebtn = document.querySelector(".close");
const confirmationMessage = document.querySelector(".bg_confirmation")
const labelcondition = document.getElementsByClassName("checkbox2-label")[0]


// prevent the default function
document.getElementsByClassName("btn-submit")[0].addEventListener("click", (e) => {
  e.preventDefault();
  validate();
})
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closebtn.addEventListener("click", closeModal)


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none"
}


//validation email
function emailIsValid(value) {
  console.log(value)
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
  return regex.test(value);
}

// validation date
function dateIsValid(value) {
  const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  return regex.test(value)
}
//validation number
function numberIsValid(value) {
  const regex = /^[0-9]*$/;
  return regex.test(value)
}

// validation form
function validate(event) {
  const firstName = document.getElementById("first")
  const lastName = document.getElementById("last")
  const email = document.getElementById("email").value;
  const date = document.getElementById("birthdate").value;
  const number = document.getElementById("quantity").value;
  const radios = document.getElementsByName("location");
  const conditionbox = document.getElementById("checkbox1");
  let formisvalid = true;
  let radiochecked = 0;
  
  if (!(firstName.value.length >= 2)) // firstname must have a minimum length of 2
  {
    showError(0, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
    formisvalid = false
  }
  else hideError(0)


  if (!(lastName.value.length >= 2)) // lastName must have a minimum length of 2
  {
    showError(1, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    formisvalid = false
  }
  else hideError(1)


  radios.forEach((radio) => { //Check if at least one radio is checked

    if (radio.checked) {
      radiochecked++;
    }
  })
  if (radiochecked == 0) {
    showError(5, "Vous devez choisir une option.")
    formisvalid = false
  }
  else hideError(5)

  if (!emailIsValid(email)) //Check if the email is of this example : example@example.ex
  {
    showError(2, "Veuillez entrer une adresse mail correcte")
    formisvalid = false
  }
  else hideError(2)
  
  if (!dateIsValid(date) || !date) //Check if the date is valid
  {
    console.log(date)
    showError(3, "Veuillez entrer une date de naissance valide")
    formisvalid = false
  }
  else hideError(3)

  if (!numberIsValid(number) || !number) // number is not null and greater or equal than 0
  {
    showError(4, "Veuillez entrer uniquement des chiffres")
    formisvalid = false
  }
  else hideError(4)

  if (!conditionbox.checked) // condition box is checked
  {
    showErrorInput("Vous devez vérifier que vous acceptez les termes et conditions")
    formisvalid = false
  }
  else hideErrorInput()


  if (formisvalid) // if the form is valid show the confirmation msg and reset the form
  {
    closeModal();
    showConfirmation();
    document.getElementsByName("reserve")[0].reset()
  }
  return false

}

function showError(i, error) // Set html attribute to show error
{
  formData[i].setAttribute("data-error", error)
  formData[i].setAttribute("data-error-visible", true)
}
function hideError(i) // Set html attribute to hide error
{
  formData[i].setAttribute("data-error-visible", false)
}

function showErrorInput(error) // Set html attribute to show error
{
  labelcondition.setAttribute("data-error", error)
  labelcondition.setAttribute("data-error-visible", true)
}
function hideErrorInput()
{
  labelcondition.setAttribute("data-error-visible", false)
}
//show success validation message
function showConfirmation() {
  confirmationMessage.style.display = "block"
}
//hide success validation message
function closeConfirmation() {
  confirmationMessage.style.display = "none"
}
