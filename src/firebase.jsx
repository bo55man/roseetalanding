import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNGYiMShKr7Xd2sgv_uVWkKqFnDXJ3fWo",
  authDomain: "roseeta-a8de3.firebaseapp.com",
  projectId: "roseeta-a8de3",
  storageBucket: "roseeta-a8de3.appspot.com",
  messagingSenderId: "1078076134648",
  appId: "1:1078076134648:web:d90cf335d4ca31da82170d",
  measurementId: "G-X1XEBBF2P7"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();