import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCglX4ol58DcQyYWAZZsyGJu8Rt5RPKc4",
    authDomain: "travel-ecommerce.firebaseapp.com",
    projectId: "travel-ecommerce",
    storageBucket: "travel-ecommerce.appspot.com",
    messagingSenderId: "938620448485",
    appId: "1:938620448485:web:b6a6f4df94ee09ac036e0c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);