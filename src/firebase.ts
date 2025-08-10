import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgoUkichxKNL6dNyo6RnIj7KsHnD9hFVg",
  authDomain: "sdknew-b385f.firebaseapp.com",
  projectId: "sdknew-b385f",
  storageBucket: "sdknew-b385f.firebasestorage.app",
  messagingSenderId: "323562025831",
  appId: "1:323562025831:web:aed389e546036736c675c2",
  measurementId: "G-LGZEZNNX6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database reference
export const db = getFirestore(app);
