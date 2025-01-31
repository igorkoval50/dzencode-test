// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfIYPDZdoG7yg8cs7Q7QupqbvNnqBTC1k",
    authDomain: "dzen-22132.firebaseapp.com",
    projectId: "dzen-22132",
    storageBucket: "dzen-22132.firebasestorage.app",
    messagingSenderId: "403678292245",
    appId: "1:403678292245:web:d9c2424192f31f53f7a11c",
    measurementId: "G-59S16Y4V92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
