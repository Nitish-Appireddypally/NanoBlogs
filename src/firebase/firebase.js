// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD1DK4swddpNJ1_76uNRg0-2dkXs-zkHc",
  authDomain: "nanoblog-8b74d.firebaseapp.com",
  projectId: "nanoblog-8b74d",
  storageBucket: "nanoblog-8b74d.appspot.com",
  messagingSenderId: "829074662487",
  appId: "1:829074662487:web:e5372142f7b9fbd9c7af12",
  measurementId: "G-15MDR811QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);

