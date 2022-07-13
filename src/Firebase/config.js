import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwc9tM1tCVQnKTv94JmCH3XZMQGqo0fPo",
  authDomain: "tiendavirtual31200.firebaseapp.com",
  projectId: "tiendavirtual31200",
  storageBucket: "tiendavirtual31200.appspot.com",
  messagingSenderId: "291917622827",
  appId: "1:291917622827:web:7143ad47c2ef270ce8046e"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
