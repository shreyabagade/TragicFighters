const firebaseConfig = {
  apiKey: "AIzaSyDXjQF2BclxrdTHSgqHXOA9xqJP4hlbuww",
  authDomain: "gethelp-db.firebaseapp.com",
  databaseURL: "https://gethelp-db-default-rtdb.firebaseio.com",
  projectId: "gethelp-db",
  storageBucket: "gethelp-db.appspot.com",
  messagingSenderId: "143078855054",
  appId: "1:143078855054:web:a14cadd9b27448c88ed4df",
  measurementId: "G-NNDEGQ66HX"
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
