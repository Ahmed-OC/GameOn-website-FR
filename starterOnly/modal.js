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
document.getElementById("email").addEventListener("click",validate)
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
    formisvalid=false
  }

  if (!(lastName.value.length>=2)) // lastName must have a minimum length of 2
  {
    formisvalid=false
  }

    radios.forEach((radio) => {
      
      if (radio.checked)
      {
        radiochecked++;
      }
    })
    if (radiochecked == 0)
    {
      formisvalid = false
    }
    
    if(!emailIsValid(email))
    {
      formisvalid = false
    }


    if (!numberIsValid(number) || !number)
    {
      formisvalid = false
    }


    if(!conditionbox.checked)
    {
      formisvalid = false
    }


    if (formisvalid)
    {
      closemodal();
      console.log("mamaou")
    }
    return false

}

