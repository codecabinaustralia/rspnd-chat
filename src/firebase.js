import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_gY_T3ZX1zYKYSB5gDjEjX8gUaZhw86E",
    authDomain: "rspnd-15b3a.firebaseapp.com",
    projectId: "rspnd-15b3a",
    storageBucket: "rspnd-15b3a.appspot.com",
    messagingSenderId: "204698056949",
    appId: "1:204698056949:web:5ac02c5b9fee4a4fdfedbc"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const getTimeStamp = function(date){
  return Timestamp.fromDate(date);
}
export const auth = getAuth();
export const messaging = getMessaging(app);
export const storage = getStorage();
