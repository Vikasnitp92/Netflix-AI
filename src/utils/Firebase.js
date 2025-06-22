// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtGrdp0ztzxoHejoSZ-NntB0PI2zkbbc8",
  authDomain: "streamgpt-c617a.firebaseapp.com",
  projectId: "streamgpt-c617a",
  storageBucket: "streamgpt-c617a.firebasestorage.app",
  messagingSenderId: "654467411150",
  appId: "1:654467411150:web:a1e6f4cdab036ec4ee749f",
  measurementId: "G-RJ0SSS0LK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();