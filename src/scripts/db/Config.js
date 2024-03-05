// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKsR_zFBOKz_qo7PTe69QwXkNhNyQPvw8",
  authDomain: "padariapaofeliz-7dc6d.firebaseapp.com",
  projectId: "padariapaofeliz-7dc6d",
  storageBucket: "padariapaofeliz-7dc6d.appspot.com",
  messagingSenderId: "399283575129",
  appId: "1:399283575129:web:fedf0b94f82f29099c5448",
  measurementId: "G-16FXMNFXZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);