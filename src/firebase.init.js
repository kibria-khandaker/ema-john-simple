import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCEtX2MuNpnFRV6MXVovrvKPSp9-AXRRm0",
    authDomain: "ema-john-simple-2022.firebaseapp.com",
    projectId: "ema-john-simple-2022",
    storageBucket: "ema-john-simple-2022.appspot.com",
    messagingSenderId: "421550565016",
    appId: "1:421550565016:web:7a402e9d86842d3e7992ed"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;