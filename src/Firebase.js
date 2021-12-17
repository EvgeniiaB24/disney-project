import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAoG_76nYVbim-5nwMj9ZYkutmNLEb6uHQ",
    authDomain: "disney-app-test.firebaseapp.com",
    projectId: "disney-app-test",
    storageBucket: "disney-app-test.appspot.com",
    messagingSenderId: "934349320404",
    appId: "1:934349320404:web:e1d3831596228b2047cb41"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore();


export default db;