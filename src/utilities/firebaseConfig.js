// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE_JFnN89Mop2WHw2mNDz9JosyT7aMEZ8",
    authDomain: "project-green-point.firebaseapp.com",
    projectId: "project-green-point",
    storageBucket: "project-green-point.appspot.com",
    messagingSenderId: "227390490177",
    appId: "1:227390490177:web:0ddadb9a71bd84445ee8c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);