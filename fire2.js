const firebaseConfig = {
  apiKey: "AIzaSyBRRjU0FHQbh3swdfxfbcs9PpFJjPfUbcw",
  authDomain: "host-db-6103c.firebaseapp.com",
  databaseURL: "https://host-db-6103c-default-rtdb.firebaseio.com",
  projectId: "host-db-6103c",
  storageBucket: "host-db-6103c.appspot.com",
  messagingSenderId: "777372858008",
  appId: "1:777372858008:web:3aa6356dc67919398502ed",
  measurementId: "G-VZQ1TB53CW"
};
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstname = getElementVal("firstname");
  var lastname = getElementVal("lastname");
  var phone = getElementVal("phone");
  var emailid = getElementVal("emailid");
  var location = getElementVal("location");
  var message = getElementVal("message");

  


  saveMessages(firstname, lastname,phone, emailid, location,message);

}
  //   reset the form
  document.getElementById("contactForm").reset();


const saveMessages = (firstname, lastname,phone, emailid, location,message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
      firstname: firstname,
      lastname: lastname,
      phone:phone,
      emailid: emailid,
      location:location,
      message:message,
      
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
