import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCw8nz2kG9E4YJ2uRVLqwJe-9a0S7G1CUc",
    authDomain: "pratic-5a1fc.firebaseapp.com",
    projectId: "pratic-5a1fc",
    storageBucket: "pratic-5a1fc.appspot.com",
    messagingSenderId: "520557922921",
    appId: "1:520557922921:web:b1be49048383610d4170f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;