const validate = (e) => {
  const valid = (function(e) {
    switch(e.id) {
    case 'email-input':
      return validateEmail(e);
    case 'email-confirmation-input':
      return validateEmailConfirmation(e);
    case 'country-input':
      return validateCountry(e);
    case 'zip-input':
      return validateZip(e);
    case 'password-input':
      return validatePassword(e);
    case 'password-confirmation-input':
      return validatePasswordConfirmation(e);
    default:
      return null;
    }
  })(e);

  if(isEmpty(e) || !valid) {
    setInvalid(e);
  }
  else {
    setValid(e);
  }
}

const isEmpty = (e) => {
  return e.value.length === 0;
}

const setValid = (e) => {
  e.classList.add("valid");
  e.classList.remove("invalid"); 
}

const setInvalid = (e) => {
  e.classList.remove("valid");
  e.classList.add("invalid"); 
}

const validateEmail = (e) => {
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegExp.test(e.value);
}

const validateEmailConfirmation = (e) => {
  return (e.value === document.getElementById("email-input").value);
}

const validateCountry = (e) => {
  return (e.value.length > 2 && e.value.length < 15 && isNaN(e.value));
}

const validateZip = (e) => {
  return (e.value.length === 5 && !isNaN(e.value));
}

const validatePassword = (e) => {
  console.log("Validate password");
}

const validatePasswordConfirmation = (e) => {
  console.log("Validate password confirmation");
}