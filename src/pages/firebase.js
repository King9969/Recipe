import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDBicwW47LwJHq-TGzLHA8K1j5f3uviZIQ",
  authDomain: "certain-benefit-236406.firebaseapp.com",
  databaseURL: "https://certain-benefit-236406.firebaseio.com",
  projectId: "certain-benefit-236406",
  storageBucket: "certain-benefit-236406.appspot.com",
  messagingSenderId: "813229051011",
  appId: "1:813229051011:web:2a5cce6cf528c0598d9fb6",
  measurementId: "G-QCQ8MZF8VT",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth(); // Export the authentication instance
export default firebase;
export const db = firebase.firestore();
