// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(process.env.NEXT_APP_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyDwby0bs2Z5IAkb_EX5V3wfCNLy-fhRxio",
  authDomain: "my-portfolio-4bcd3.firebaseapp.com",
  projectId: "my-portfolio-4bcd3",
  storageBucket: "my-portfolio-4bcd3.appspot.com",
  messagingSenderId: "NEXT_APP_FIREBASE_MESSAGING_SENDER_ID = 85527003194",
  appId: "1:85527003194:web:508c5f2538062f2568b503",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage(app);

// const firebaseConfig = {
//   apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_APP_FIREBASE_APP_ID,
// };
