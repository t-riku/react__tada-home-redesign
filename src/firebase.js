// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDQu9ylRvPwl0UWg8oPysTcOY6NAS42q18",
//   authDomain: "tada-home-redesign.firebaseapp.com",
//   projectId: "tada-home-redesign",
//   storageBucket: "tada-home-redesign.appspot.com",
//   messagingSenderId: "1098761792797",
//   appId: "1:1098761792797:web:b96bf97dbe41939082c5f4",
//   measurementId: "G-JXWVZCNR5L",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // apiKey: "AIzaSyDnw9YvU_yaFtUvwla4XSgJ1sRLPUDTRzo",^
  authDomain: "tada-architect.firebaseapp.com",
  projectId: "tada-architect",
  storageBucket: "tada-architect.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  // appId: "1:1031499964805:web:f2ce35db1106d80f2764ec",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
