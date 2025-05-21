// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe0zgdAfqxJQnn9jHKlpWrUfrbVHG5RzM",
  authDomain: "hobbyhub-project.firebaseapp.com",
  projectId: "hobbyhub-project",
  storageBucket: "hobbyhub-project.firebasestorage.app",
  messagingSenderId: "336218946698",
  appId: "1:336218946698:web:4059507a1259c29dab0173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;