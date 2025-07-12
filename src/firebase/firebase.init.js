
import { initializeApp } from "firebase/app";

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
export default app;
