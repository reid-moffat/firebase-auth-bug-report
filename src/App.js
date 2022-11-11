import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import {
    createUserWithEmailAndPassword,
    deleteUser,
    signInWithEmailAndPassword,
    sendEmailVerification,
    getAuth,
    signOut,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDginigmOTQu46Qp8NIB9z4ItcJjggrMKA",
    authDomain: "auth-bug-report.firebaseapp.com",
    projectId: "auth-bug-report",
    storageBucket: "auth-bug-report.appspot.com",
    messagingSenderId: "171500646226",
    appId: "1:171500646226:web:69f4a94b63006ccd52d48b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function App() {
    const email = '18rem8@queensu.ca';
    const password = 'password12345';

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((r) => {sendEmailVerification(r.user)
            .then(() => {console.log(`Account created successfully: ${JSON.stringify(r, null, 4)}`)})
            .catch((err) => {console.log(`Error creating account: ${JSON.stringify(err, null, 4)}`)});});
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((r) => {
                if (!r.user.emailVerified) {
                    throw 'Unverified email';
                }
                console.log('Logged in successfully')
            })
            .catch((err) => {console.log(`Error signing in: ${JSON.stringify(err, null, 4)}`)});
    }

    const signOutUser = () => {
        if (!auth.currentUser) {
            throw `No user logged in, can't log out`;
        }

        signOut(auth)
            .then(() => console.log('Sign out success'))
            .catch((err) => console.log(`Error signing out: ${err}`));
    }

    const deleteAccount = () => {
        if (!auth.currentUser) {
            throw `No user logged in, can't delete account`;
        }

        deleteUser(auth.currentUser)
            .then(() => console.log('Account deleted successfully'))
            .catch((err) => console.log(`Error deleting account: ${JSON.stringify(err, null, 4)}`));
    }

  return (
    <div className="App">

        <button onClick={signUp}>Sign up</button>
        <button onClick={signIn}>Sign in</button>
        <button onClick={signOutUser}>Sign out</button>
        <button onClick={deleteAccount}>Delete account</button>

    </div>
  );
}

export default App;
