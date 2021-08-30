// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2md8yTc1KAKttvRxj8BGSWx-34Fn0qCg",
  authDomain: "react-auth-e5cfa.firebaseapp.com",
  projectId: "react-auth-e5cfa",
  storageBucket: "react-auth-e5cfa.appspot.com",
  messagingSenderId: "455849384335",
  appId: "1:455849384335:web:77b6f6a2ac645f63b2d3fa",
  measurementId: "G-CVEZ0LQC4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
export const provider = new GoogleAuthProvider(); 
// const analytics = getAnalytics(app);
