import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOhRPtUc1nzK821A6xLL5bPAjqw7CHhD8",
  authDomain: "gasha-39a4e.firebaseapp.com",
  projectId: "gasha-39a4e",
  storageBucket: "gasha-39a4e.appspot.com",
  messagingSenderId: "736932653773",
  appId: "1:736932653773:web:c72750fa705c7b846cd784",
  measurementId: "G-LBPWWL3CB7"
});

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db


