// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_api,
  authDomain: "react-firestore22.firebaseapp.com",
  projectId: "react-firestore22",
  storageBucket: "react-firestore22.appspot.com",
  messagingSenderId: process.env.REACT_APP_msid,
  appId: process.env.REACT_APP_appid
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
