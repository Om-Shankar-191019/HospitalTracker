// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyACjIjgBi5DIHtyM4b6T071M4q8bItmUIQ",
    authDomain: "hospital-tracker-2e2da.firebaseapp.com",
    projectId: "hospital-tracker-2e2da",
    storageBucket: "hospital-tracker-2e2da.appspot.com",
    messagingSenderId: "939773989170",
    appId: "1:939773989170:web:3a7b4a2609315d0b7bc72b",
    measurementId: "G-J0EVTQBF1M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

export { app, auth, db, storage} ;
