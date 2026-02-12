import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo-4BMV2yWoZYJJR7n9a75rq4f6ZaBo1o",
  authDomain: "dong-flix.firebaseapp.com",
  projectId: "dong-flix",
  storageBucket: "dong-flix.firebasestorage.app",
  messagingSenderId: "198425630648",
  appId: "1:198425630648:web:5596a07c238fc404e5214d",
  measurementId: "G-P5J5K948CY"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
