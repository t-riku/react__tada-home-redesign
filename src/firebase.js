// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQu9ylRvPwl0UWg8oPysTcOY6NAS42q18",
  authDomain: "tada-home-redesign.firebaseapp.com",
  projectId: "tada-home-redesign",
  storageBucket: "tada-home-redesign.appspot.com",
  messagingSenderId: "1098761792797",
  appId: "1:1098761792797:web:b96bf97dbe41939082c5f4",
  measurementId: "G-JXWVZCNR5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
