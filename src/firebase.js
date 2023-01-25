// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKFiP6TyAFvTH7d8ds_up35gBWWQEpbYA",
    authDomain: "hospital-tagging.firebaseapp.com",
    projectId: "hospital-tagging",
    storageBucket: "hospital-tagging.appspot.com",
    messagingSenderId: "784757280374",
    appId: "1:784757280374:web:9c82dbf011c8c1078f1957"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth} ;
