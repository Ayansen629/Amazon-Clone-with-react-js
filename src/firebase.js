// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDjzIFifhF_Wvij_YursQ8m2Ch5bSFFLo0",
  authDomain: "clone-d7ddd.firebaseapp.com",
  projectId: "clone-d7ddd",
  storageBucket: "clone-d7ddd.appspot.com",
  messagingSenderId: "738394382954",
  appId: "1:738394382954:web:6200a353a0415594862013",
  measurementId: "G-5M4ZY98TX8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
