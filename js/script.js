const validate = (e) => {
  switch(e.id){
    case 'email-input':
      validateEmail();
      break;
    case 'email-confirmation-input':
      validateEmailConfirmation();
      break;
    case 'country-input':
      validateCountry();
      break;
    case 'zip-input':
      validateZip();
      break;
    case 'password-input':
      validatePassword();
      break;
    case 'password-confirmation-input':
      validatePasswordConfirmation();
      break;
    default:
      break;
  }
}

const validateEmail = () => {
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailInput = document.getElementById("email-input");

  if(emailInput.value.length === 0 || !emailRegExp.test(emailInput.value)){
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid"); 
  } 
  else { 
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid"); 
  }
}

const validateEmailConfirmation = () => {
  console.log("Validate email confirmation");
}

const validateCountry = () => {
  console.log("Validate country");
}

const validateZip = () => {
  console.log("Validate zip");
}

const validatePassword = () => {
  console.log("Validate password");
}

const validatePasswordConfirmation = () => {
  console.log("Validate password confirmation");
}