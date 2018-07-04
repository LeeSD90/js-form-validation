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
  console.log("Validate email");
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