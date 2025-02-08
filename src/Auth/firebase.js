import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// 🔹 Replace with your Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyB9hgoGRTDObibru0Mf-E5W44FepxuXzrI",
    authDomain: "asquare-1.firebaseapp.com",
    projectId: "asquare-1",
    storageBucket: "asquare-1.firebasestorage.app",
    messagingSenderId: "882391488333",
    appId: "1:882391488333:web:55e193d3bcd0ca598d8904",
    measurementId: "G-3ZFWM4LFNJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };
