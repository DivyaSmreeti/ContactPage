// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAva4IjpWNUbiqUdz4fJO8LWALMvvdvmEQ",
  authDomain: "vite-contactapp-8e49b.firebaseapp.com",
  projectId: "vite-contactapp-8e49b",
  storageBucket: "vite-contactapp-8e49b.appspot.com",
  messagingSenderId: "921317842819",
  appId: "1:921317842819:web:76b442933d2fac1b7ca0b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);