import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA-rzmRhbBx70J47GzsFHcySW7FigeMMj0",
    authDomain: "create-a-website-like-tw-fcc42.firebaseapp.com",
    projectId: "create-a-website-like-tw-fcc42",
    storageBucket: "create-a-website-like-tw-fcc42.appspot.com",
    messagingSenderId: "175655982135",
    appId: "1:175655982135:web:71ec5081a3a2751539dbb2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;