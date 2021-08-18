import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY3R3VsYSTHyVuF8GqfLWtsPgRM57Dodk",
  authDomain: "jitsportal-4f45c.firebaseapp.com",
  projectId: "jitsportal-4f45c",
  storageBucket: "jitsportal-4f45c.appspot.com",
  messagingSenderId: "384802396342",
  appId: "1:384802396342:web:c2dca0260739e908f02e17",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig); //avoid trying to init twice

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
