// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "qrng-mern-test.firebaseapp.com",
  projectId: "qrng-mern-test",
  storageBucket: "qrng-mern-test.appspot.com",
  messagingSenderId: "259034811978",
  appId: "1:259034811978:web:fd2564b487774e34dba0b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);