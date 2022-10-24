import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClE4hVmtwCierVX_Tn8uPnLepDXZDy4xY",
    authDomain: "your-best-fit-db.firebaseapp.com",
    projectId: "your-best-fit-db",
    storageBucket: "your-best-fit-db.appspot.com",
    messagingSenderId: "650368230871",
    appId: "1:650368230871:web:8f8a8eb4426c96cbb51792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    //return a boolean, check if the database has the user stored or not

    //if user data does not exists is true
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch (error) {
            console.log('err creating the user', error.message)
        }
    }
    return userDocRef;
}