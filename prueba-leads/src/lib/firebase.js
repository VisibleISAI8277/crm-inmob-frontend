import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_2QDDblTIrDOIHuqRDfb-nnzAJ1nzCLc",
  authDomain: "crm-inmobiliaria-nosql.firebaseapp.com",
  projectId: "crm-inmobiliaria-nosql",
  storageBucket: "crm-inmobiliaria-nosql.firebasestorage.app",
  messagingSenderId: "420385186652",
  appId: "1:420385186652:web:1fff64f2fcdf303f145799",
  measurementId: "G-XHQVLZT4ES"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);