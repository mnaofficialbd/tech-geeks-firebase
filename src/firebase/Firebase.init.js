// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwtQ3PaLPHZEgDtBHPNh8zuh_6SDUl4kg",
  authDomain: "tech-geeks-firebase-6ffb6.firebaseapp.com",
  projectId: "tech-geeks-firebase-6ffb6",
  storageBucket: "tech-geeks-firebase-6ffb6.appspot.com",
  messagingSenderId: "291511844483",
  appId: "1:291511844483:web:2013ba572be9db7f69e5b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;