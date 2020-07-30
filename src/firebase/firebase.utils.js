import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBaH7VmTzRmWHYkAdH00RSiL3W1GI7ChHE",
    authDomain: "crwn-db-b737b.firebaseapp.com",
    databaseURL: "https://crwn-db-b737b.firebaseio.com",
    projectId: "crwn-db-b737b",
    storageBucket: "crwn-db-b737b.appspot.com",
    messagingSenderId: "924025525201",
    appId: "1:924025525201:web:8fd1e7f7e3607996ee46f0",
    measurementId: "G-HD6G8Q3R3T"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;