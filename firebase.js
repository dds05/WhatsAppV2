import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxdF5WAxA7o5vg9aEMVsnWGn6e6vNG_o8",
    authDomain: "whatsapp2-f7b2f.firebaseapp.com",
    projectId: "whatsapp2-f7b2f",
    storageBucket: "whatsapp2-f7b2f.appspot.com",
    messagingSenderId: "93704016417",
    appId: "1:93704016417:web:3a03337d931bba99d40960"
  };

const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

const db=app.firestore();
const auth=app.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};