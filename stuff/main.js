// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2t5krU-knL7TZ0mOMZ-C2XBbocy207VU",
    authDomain: "vibgyor-services.firebaseapp.com",
    databaseURL: "https://vibgyor-services.firebaseio.com",
    projectId: "vibgyor-services",
    storageBucket: "vibgyor-services.appspot.com",
    messagingSenderId: "146047568915"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var address = getInputVal('address');
    var phone = getInputVal('phone');
    var service = getInputVal('service');
  
    // Save message
    saveMessage(name, address, phone, service);
  
    
  
    // Clear form
    // document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, address, phone, service ){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name,
      address,
      phone,
      service
    });
  }