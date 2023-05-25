// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZAKyjz2UG0VqhS1nXRY9wyjioQiNR5g",
  authDomain: "shopiamshei-app.firebaseapp.com",
  projectId: "shopiamshei-app",
  storageBucket: "shopiamshei-app.appspot.com",
  messagingSenderId: "166103129267",
  appId: "1:166103129267:web:6896507a97ce7098aca4c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
