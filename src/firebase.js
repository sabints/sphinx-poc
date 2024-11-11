import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHDQRLSdDa4_jsJl61j5ob7PCzSYfGyi4",
    authDomain: "interactive-dashbord-poc.firebaseapp.com",
    projectId: "interactive-dashbord-poc",
    storageBucket: "interactive-dashbord-poc.firebasestorage.app",
    messagingSenderId: "1037579034323",
    appId: "1:1037579034323:web:9b908edd2c9efb17e0be26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc, getDoc, doc }; 