// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwc9tM1tCVQnKTv94JmCH3XZMQGqo0fPo",
  authDomain: "tiendavirtual31200.firebaseapp.com",
  projectId: "tiendavirtual31200",
  storageBucket: "tiendavirtual31200.appspot.com",
  messagingSenderId: "291917622827",
  appId: "1:291917622827:web:7143ad47c2ef270ce8046e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
