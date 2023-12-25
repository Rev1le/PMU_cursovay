import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAU3uJfthX4QYNI3BwUXX7JLUeiD0ndp4s",
    authDomain: "mobiledevcurs.firebaseapp.com",
    projectId: "mobiledevcurs",
    storageBucket: "mobiledevcurs.appspot.com",
    messagingSenderId: "956953519976",
    appId: "1:956953519976:web:aa38092e37bfd4c81598dd"
};

initializeApp(firebaseConfig);

export default getFirestore();
