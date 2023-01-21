const firebaseConfig = {
  apiKey: "AIzaSyAw2iMaPY4VXjJxMNnQzj576OOGeqLZ1LQ",
  authDomain: "volunteer-db-d7989.firebaseapp.com",
  databaseURL: "https://volunteer-db-d7989-default-rtdb.firebaseio.com",
  projectId: "volunteer-db-d7989",
  storageBucket: "volunteer-db-d7989.appspot.com",
  messagingSenderId: "629768694453",
  appId: "1:629768694453:web:2d92127542888f42ce6cfc",
  measurementId: "G-V91PC7TWC7"
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
