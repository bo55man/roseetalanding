import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtWIV4xhYPN0xS7HcwgLkG-1E73hdIo0o",
  authDomain: "roseeta-landing.firebaseapp.com",
  projectId: "roseeta-landing",
  storageBucket: "roseeta-landing.appspot.com",
  messagingSenderId: "456243233064",
  appId: "1:456243233064:web:67290800105de2af58501d",
  measurementId: "G-EJB68K4LRG"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
