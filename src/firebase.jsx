// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ays4oGqJVHT2nH1Csrr7CHgeZfh785U",
  authDomain: "vizioncardrater.firebaseapp.com",
  projectId: "vizioncardrater",
  storageBucket: "vizioncardrater.appspot.com",
  messagingSenderId: "962422287586",
  appId: "1:962422287586:web:31e3b95b0bf91df7c702bb",
  measurementId: "G-CGP82YGKH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;

// // const app = firebase.initializeApp({

// //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.REACT_APP_FIREBASE_APP_ID

// // })
