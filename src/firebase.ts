import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdyFrSZJ5btIZ44UT8uzUXcVwUUBYMbyY",
  authDomain: "serflix-a0264.firebaseapp.com",
  projectId: "serflix-a0264",
  storageBucket: "serflix-a0264.appspot.com",
  messagingSenderId: "845195220375",
  appId: "1:845195220375:web:8080aa0eda17147421a0d2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
