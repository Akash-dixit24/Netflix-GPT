// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtvL3TF6opTZPENn47qiIixN7W3CegMq8",
  authDomain: "netflix-gpt-7ef47.firebaseapp.com",
  projectId: "netflix-gpt-7ef47",
  storageBucket: "netflix-gpt-7ef47.appspot.com",
  messagingSenderId: "246861331956",
  appId: "1:246861331956:web:1ed39499016cc4c4344da1",
  measurementId: "G-CNEJWZ5Y4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();