import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgHyVoUGXBEe4050WMbxAkRJtsplhDq18",
  authDomain: "ecommerce-65115.firebaseapp.com",
  projectId: "ecommerce-65115",
  storageBucket: "ecommerce-65115.firebasestorage.app",
  messagingSenderId: "806981777501",
  appId: "1:806981777501:web:6a244723534c6e0f1b75b4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db