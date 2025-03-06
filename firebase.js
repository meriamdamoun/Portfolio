import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA6470r4R7kT_VEJa1MF8yBBbW1lku2RzY",
    authDomain: "portfoliodb-9b580.firebaseapp.com",
    projectId: "portfoliodb-9b580",
    storageBucket: "portfoliodb-9b580.firebasestorage.app",
    messagingSenderId: "37905126006",
    appId: "1:37905126006:web:fb1fa64fa1e6ac9a850557",
    measurementId: "G-1T8C4G9XMD"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
