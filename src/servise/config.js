
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "entregacodehose-orlando.firebaseapp.com",
  projectId: "entregacodehose-orlando",
  storageBucket: "entregacodehose-orlando.firebasestorage.app",
  messagingSenderId: "76168935568",
  appId: "1:76168935568:web:7640e6c3108dd34963c015"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)