import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAsilAZc6nLZOqLJkOJ5y8JVbafyQ5zqi4",
    authDomain: "faisal-shoes-store.firebaseapp.com",
    projectId: "faisal-shoes-store",
    storageBucket: "faisal-shoes-store.firebasestorage.app",
    messagingSenderId: "508639962281",
    appId: "1:508639962281:web:58f12f298970f6a5c0b5b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export
export {
    db,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc
};