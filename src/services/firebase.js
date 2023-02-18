import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU4-IwKEjNnDU1Y8UqE0wWd5D96YuiDTA",
  authDomain: "staylo-6c46b.firebaseapp.com",
  projectId: "staylo-6c46b",
  storageBucket: "staylo-6c46b.appspot.com",
  messagingSenderId: "182157052472",
  appId: "1:182157052472:web:6550f77623d56cc766f4cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
