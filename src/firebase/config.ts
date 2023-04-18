import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEmi-r1FYsYS9ijn-1W8PvNyDeyya85TI",
  authDomain: "social-media-app-2a396.firebaseapp.com",
  projectId: "social-media-app-2a396",
  storageBucket: "social-media-app-2a396.appspot.com",
  messagingSenderId: "933626439750",
  appId: "1:933626439750:web:74db2a0868c11097118247",
  measurementId: "G-DFBC5ZY9S0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
