// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq1LG0tn76QsHGK2REkQRBzdNNd7UKkhE",
  authDomain: "react-firestore22.firebaseapp.com",
  projectId: "react-firestore22",
  storageBucket: "react-firestore22.appspot.com",
  messagingSenderId: "620326276465",
  appId: "1:620326276465:web:6e1ef34d4107a0e61abad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
