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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;