import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUz5HNqUABTzvkWDMqeN5kRpcUrWFxLbY",
    authDomain: "accountable-a36cf.firebaseapp.com",
    projectId: "accountable-a36cf",
    storageBucket: "accountable-a36cf.appspot.com",
    messagingSenderId: "443303280805",
    appId: "1:443303280805:web:c77cdef3827c33dfd6cd4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();