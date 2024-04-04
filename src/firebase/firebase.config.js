// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr2X8Bt1yKPnDtW_ueo7pJYIurZHylIeI",
    authDomain: "dragon-news-auth-9c134.firebaseapp.com",
    projectId: "dragon-news-auth-9c134",
    storageBucket: "dragon-news-auth-9c134.appspot.com",
    messagingSenderId: "780965647408",
    appId: "1:780965647408:web:6d7134df55c446e8eac9f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;