// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAs82yUdfampzRFz30pXzW-8JigMqbE4c",
  authDomain: "chat-app-35c72.firebaseapp.com",
  projectId: "chat-app-35c72",
  storageBucket: "chat-app-35c72.appspot.com",
  messagingSenderId: "417106520509",
  appId: "1:417106520509:web:b6fe44992e09586aa8cad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
