import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, push, set, get, child, onValue, onChildAdded } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
// import "D:/projects/github/programs/firebase-admin/assets/vendor/toastr/toastr.js"
// import toastr from 'D:/projects/github/programs/firebase-admin/assets/vendor/toastr/toastr.js';

// const firebaseConfig = {
//     apiKey: "AIzaSyAi0uX6TSBy_BDCB2QEWFXr5WlkRjBqGvE",
//     authDomain: "auth-b9488.firebaseapp.com",
//     projectId: "auth-b9488",
//     storageBucket: "auth-b9488.appspot.com",
//     messagingSenderId: "269978507560",
//     appId: "1:269978507560:web:39ef3a95cb4a97a932181d",
//     measurementId: "G-HWTBS0VED6"
// };

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
const database = getDatabase(firebaseApp);

const auth = getAuth(firebaseApp)

function processResponse(inputString) {
    // Convert the string to lowercase and split it into an array of words
    let words = inputString.toLowerCase().split('_');

    // Capitalize the first letter of each word
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words into a sentence
    let sentence = words.join(' ');

    return sentence;
}

function login() {
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed in
            const user = userCredential.user;
            window.location.href = "inbox.html"
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            toastr.options.closeButton = true;
            toastr.options.positionClass = 'toast-bottom-full-width';
            toastr.options.showDuration = 3000;
            if (errorMessage.includes("invalid-credential"))
                toastr['error']("Invalid credentials!");
            else
                toastr['error']("Unable to login!");
            setTimeout(() => {
                document.querySelector("#loginBtn").classList.remove("d-none")
                document.querySelector("#loadingBtn").classList.add("d-none")
            }, 2000);
        });
}

const leadsRef = ref(database, 'leads');

export function fetchLeads() {
    onChildAdded(ref(database, '/leads/'), (snapshot) => {
        console.log(snapshot.key);
        let nodeKey = snapshot.key
        console.log(snapshot.val());
        let nodeData = snapshot.val()

        let newElement = `
                <li class="clearfix">
                    <div class="mail-detail-left">
                        <label class="fancy-checkbox">
                            <input type="checkbox" name="checkbox" class="checkbox-tick">
                            <span></span>
                        </label>
                        <a href="javascript:void(0);" class="mail-star active"><i
                                class="fa fa-star"></i></a>
                    </div>
                    <div class="mail-detail-right">
                        <h6 class="sub">
                            <a href="javascript:void(0);" class="mail-detail-expand">${nodeData?.name}</a> 
                        </h6>
                        <p class="dep">
                            <span class="m-r-10">[ ${nodeData?.subject} ]</span>
                            <span>${nodeData?.message}</span>
                        </p>
                        <span class="time">23 Jun</span>
                    </div>
                    <div class="hover-action">
                        <a class="btn btn-warning mr-2" href="javascript:void(0);"><i
                                class="fa fa-archive"></i></a>
                        <button type="button" data-type="confirm"
                            class="btn btn-danger js-sweetalert" title="Delete"><i
                                class="fa fa-trash-o"></i></button>
                    </div>
                </li>`;
        $(".leads-list").prepend(newElement)
    }
    , {
        onlyOnce: false
    });
}

export function fetchLeadInfo(uid) {
    get(child(ref(database), `leads/${key}`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return 0;
        }
    })
}

document.querySelector("#login-form")?.addEventListener('submit', e => {
    e.preventDefault()
    document.querySelector("#loginBtn").classList.add("d-none")
    document.querySelector("#loadingBtn").classList.remove("d-none")
    login()
})


document.querySelectorAll(".signout-btn")?.forEach(el => {
    el.addEventListener('click', e => {
        signOut(auth).then(() => {
            window.location.href = "login.html"
        }).catch((error) => {
            // An error happened.
        });
    })
})
