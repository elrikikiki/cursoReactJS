// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6uF-MfgOU7HjZpLocLPX14hxn1rhFR-c",
  authDomain: "birrex-santi.firebaseapp.com",
  projectId: "birrex-santi",
  storageBucket: "birrex-santi.appspot.com",
  messagingSenderId: "1079937804727",
  appId: "1:1079937804727:web:f93e031887e531a4f72032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'productos'); /* collection es de firebase, lo primero q se escribe es la base de datos, luego es lo q le voy a pasar */