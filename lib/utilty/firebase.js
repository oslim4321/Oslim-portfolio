// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwby0bs2Z5IAkb_EX5V3wfCNLy-fhRxio",
  authDomain: "my-portfolio-4bcd3.firebaseapp.com",
  projectId: "my-portfolio-4bcd3",
  storageBucket: "my-portfolio-4bcd3.appspot.com",
  messagingSenderId: "85527003194",
  appId: "1:85527003194:web:508c5f2538062f2568b503",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage(app);
