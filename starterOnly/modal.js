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
const confirmationMessage = document.querySelectorAll(".bground")[1]


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closebtn.addEventListener("click",closemodal)


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closemodal() {
    modalbg.style.display = "none"
}


//validation email
function emailIsValid(value) {
  console.log(value)
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
  return regex.test(value);
}

//validation number
function numberIsValid(value) {
  const regex = /^[0-9]*$/;
  return regex.test(value)
}

// validation form
function validate(){
    const firstName = document.getElementById("first")
    const lastName = document.getElementById("last")
    const email = document.getElementById("email").value;
    const number = document.getElementById("quantity").value;
    const radios = document.getElementsByName("location");
    const conditionbox = document.getElementById("checkbox1");
    let formisvalid = true;
    let radiochecked = 0;
  
    
    if (!(firstName.value.length>=2)) // firstname must have a minimum length of 2
  {
    showError(0,"Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
    formisvalid=false
  }
  else hideError(0)


  if (!(lastName.value.length>=2)) // lastName must have a minimum length of 2
  {
    showError(1,"Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    formisvalid=false
  }
  else hideError(1)


    radios.forEach((radio) => {
      
      if (radio.checked)
      {
        radiochecked++;
      }
    })
    if (radiochecked == 0)
    {
      showError(5,"Vous devez choisir une option.")
      formisvalid = false
    }
    else hideError(5)

    if(!emailIsValid(email))
    {
      showError(2,"Veuillez entrer une adresse mail correcte")
      formisvalid = false
    }
    else hideError(2)


    if (!numberIsValid(number) || !number)
    {
      showError(4,"Veuillez entrer uniquement des chiffres")
      formisvalid = false
    }
    else hideError(4)

    if(!conditionbox.checked)
    {
      showError(6,"Vous devez vérifier que vous acceptez les termes et conditions")
      formisvalid = false
    }
    else hideError(6)

    
    if (formisvalid)
    {
      closemodal();
      showConfirmation();
      setTimeout(closeConfirmation,4000)
      document.getElementsByName("reserve")[0].reset()
    }
    return false

}

function showError(i,error) // Set html attribute to show error
{
  formData[i].setAttribute("data-error",error)
  formData[i].setAttribute("data-error-visible",true)
}
function hideError(i) // Set html attribute to hide error
{
  formData[i].setAttribute("data-error-visible",false)
}

//show success validation message
function showConfirmation() {
  confirmationMessage.style.display="block"
}
//hide success validation message
function closeConfirmation() {
  confirmationMessage.style.display="none"
}
