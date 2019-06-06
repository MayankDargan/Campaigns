import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA-TvZu0eK656E-O_0NBMyd7z1b_34y15U",
    authDomain: "campaigns-2eb2a.firebaseapp.com",
    databaseURL: "https://campaigns-2eb2a.firebaseio.com",
    projectId: "campaigns-2eb2a",
    storageBucket: "campaigns-2eb2a.appspot.com",
    messagingSenderId: "130316408222",
    appId: "1:130316408222:web:678a9c172cde6445"
  };
  // Initialize Firebase
  let fire = firebase.initializeApp(firebaseConfig);
export default fire;