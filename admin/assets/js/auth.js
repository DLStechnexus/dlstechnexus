import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// ==========================
// TESTING CREDS
// ==========================
// const firebaseConfig = {
//     apiKey: "AIzaSyAi0uX6TSBy_BDCB2QEWFXr5WlkRjBqGvE",
//     authDomain: "auth-b9488.firebaseapp.com",
//     projectId: "auth-b9488",
//     storageBucket: "auth-b9488.appspot.com",
//     messagingSenderId: "269978507560",
//     appId: "1:269978507560:web:39ef3a95cb4a97a932181d",
//     measurementId: "G-HWTBS0VED6"
// };

// ==========================
// DLS CREDS
// ==========================
const firebaseConfig = {
    apiKey: "AIzaSyDlJgwTVzA_Jd8Oc_lp283x1djlYPCqSoY",
    authDomain: "dlswebsite-d2f6b.firebaseapp.com",
    projectId: "dlswebsite-d2f6b",
    storageBucket: "dlswebsite-d2f6b.appspot.com",
    messagingSenderId: "539797998290",
    appId: "1:539797998290:web:bdc2fbdd6fb49eff0cbb0b",
    measurementId: "G-VP5NBK86VM"
 };


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("User is already logged in");
        // console.log(window.location.pathname);
        if(window.location.pathname.includes('/login.html')) 
            window.location.href = 'index.html'
    } else {
        if(!window.location.pathname.includes('/login.html'))
            window.location.href = "login.html"
    }
});