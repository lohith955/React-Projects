import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD72lPvkmvF1LHc6MsMXFDHZ5_rp9gs39g",

  authDomain: "my-react-project-d56f8.firebaseapp.com",

  projectId: "my-react-project-d56f8",

  storageBucket: "my-react-project-d56f8.firebasestorage.app",

  messagingSenderId: "605531511614",

  appId: "1:605531511614:web:6b383264d084158b702a6f"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export default app;
export const db = getFirestore(app)