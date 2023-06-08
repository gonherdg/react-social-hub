// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaiWDd3V99yJWRH0HZT2N-_q-1F8FhE4Q",
    authDomain: "memories-app-370722.firebaseapp.com",
    projectId: "memories-app-370722",
    storageBucket: "memories-app-370722.appspot.com",
    messagingSenderId: "871267271584",
    appId: "1:871267271584:web:d2a5a5e02ed8e4390f9ac5",
    measurementId: "G-VXYB769913",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
