// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO:  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaJazuB5VrE7CJoJ6YKC5_QGjEk8NiSGE",
  authDomain: "clone-1-5d962.firebaseapp.com",
  projectId: "clone-1-5d962",
  storageBucket: "clone-1-5d962.appspot.com",
  messagingSenderId: "401402880432",
  appId: "1:401402880432:web:1791e894465b4557f7f675",
  measurementId: "G-6V680L588H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()