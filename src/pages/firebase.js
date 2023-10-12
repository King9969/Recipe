import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {

};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth(); // Export the authentication instance
export default firebase;
export const db = firebase.firestore();
