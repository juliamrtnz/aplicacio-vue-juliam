import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIqyOpptLX7bVhb8pmj-ZamE8rgFWYeWg",
  authDomain: "linkedin-per-animalets.firebaseapp.com",
  projectId: "linkedin-per-animalets",
  storageBucket: "linkedin-per-animalets.firebasestorage.app",
  messagingSenderId: "1064328803375",
  appId: "1:1064328803375:web:0433cc77f099f2bef502da"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);