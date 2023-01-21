//the db connectivity code(will differ for different mail accounts in firebase )



//First Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

//Last name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");

//Phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

//Password
let locationInput = document.getElementById("location");
let locationError = document.getElementById("location-error");
let emptylocationError = document.getElementById("empty-location");

//Verify Password
let messageInput = document.getElementById("message");
let messageError = document.getElementById("message-error");
let emptymessageError = document.getElementById("empty-message");

//Submit
let submitButton = document.getElementById("submit-button");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

//Password Verification


//Text verification (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};

//Phone number verification
const phoneVerify = (number) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(number);
};

//Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

//For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    //input is null/empty
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    //input has some content
    emptyErrorReference.classList.add("hide");
  }
};

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

//For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};

//First name
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    //If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    //for false
    errorUpdate(firstNameInput, firstNameError);
    //empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});

//Last name
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});

//Phone
phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    errorUpdate(phoneInput, phoneError);
    emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});

//Email
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});

//Password
locationInput.addEventListener("input", () => {
  if (locationVerify(locationInput.value)) {
    locationError.classList.add("hide");
    validInput(locationInput);
  } else {
    errorUpdate(locationInput, locationError);
    emptyUpdate(locationInput, emptylocationError, locationError);
  }
});

//Verify password
messageInput.addEventListener("input", () => {
  if (messageVerify(messageInput.value)) {
    messageError.classList.add("hide");
    validInput(messageInput);
  } else {
    errorUpdate(messageInput, messageError);
    emptyUpdate(messageInput, emptymessageError, messageError);
  }
});

//Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
});