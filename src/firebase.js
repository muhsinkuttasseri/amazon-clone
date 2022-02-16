// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl7TZZhPr4DHz0kZlkptnoSuP0REO0-WM",
  authDomain: "clone-34c80.firebaseapp.com",
  projectId: "clone-34c80",
  storageBucket: "clone-34c80.appspot.com",
  messagingSenderId: "648640259586",
  appId: "1:648640259586:web:cb12730198e8319726e91b",
  measurementId: "G-1QL7WG0KN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);