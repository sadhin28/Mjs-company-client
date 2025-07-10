// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN-5fRpNjLMfMcLBnmXMnKwu8sbvU6jZI",
  authDomain: "mjs-company.firebaseapp.com",
  projectId: "mjs-company",
  storageBucket: "mjs-company.firebasestorage.app",
  messagingSenderId: "75324137545",
  appId: "1:75324137545:web:72f499ce7e0d71577b5f98",
  measurementId: "G-F329J9T7HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
