// Import the functions you need from the SDKs you need
// import initializeApp from "firebase/app";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0DUiFuPpdfg_yRR655YHvIepB9vMRKqI",
  authDomain: "my-money-ebec8.firebaseapp.com",
  projectId: "my-money-ebec8",
  storageBucket: "my-money-ebec8.appspot.com",
  messagingSenderId: "936809708520",
  appId: "1:936809708520:web:60489dc81717e98842825d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.Timestamp

export {auth, firestore, timestamp}