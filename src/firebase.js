// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDecJcD5c0VRTTmnmCDFCmQ68u_GP6RCUs",
  authDomain: "kpopnews4ever.firebaseapp.com",
  databaseURL: "https://kpopnews4ever-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kpopnews4ever",
  storageBucket: "kpopnews4ever.appspot.com",
  messagingSenderId: "513455849171",
  appId: "1:513455849171:web:8bfaf682a900e18fbe5e26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)



