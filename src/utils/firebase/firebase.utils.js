import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    //FacebookAuthProvider
    createUserWithEmailAndPassword,
    getAdditionalUserInfo,
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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(app); //looks like app is optional to be included in  (  )

export const createUserDocFromAuth = async (userAuth, additionalUserInfo) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    //return a boolean, check if the database has the user stored or not

    //if user data does not exists is true
    if (!userSnapshot.exists()) {
        const { userName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                userName,
                email,
                createAt,
                ...additionalUserInfo,
            })
        } catch (error) {
            console.log('err creating the user', error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}