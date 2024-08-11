// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-204f9.firebaseapp.com",
  projectId: "mern-estate-204f9",
  storageBucket: "mern-estate-204f9.appspot.com",
  messagingSenderId: "429122402908",
  appId: "1:429122402908:web:ff156d80db08e9cedb8499"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);