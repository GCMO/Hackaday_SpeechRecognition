import 'firebase/databse'
import firebase, {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

//FIREBASE SETUP & INIT FILE
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from "firebase/app";

// Firebase app configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-DUHL441xz-9DnWUwM7AwnrHpaeGLWxk",
  authDomain: "speech2text-db.firebaseapp.com",
  databaseURL: "https://speech2text-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "speech2text-db",
  storageBucket: "speech2text-db.appspot.com",
  messagingSenderId: "494827668669",
  appId: "1:494827668669:web:baf49b62232d4d326423d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const databaseRef = firebase.database().ref();
// export const speech2textRef = databaseRef.child('speech2text');
export default firebase;
