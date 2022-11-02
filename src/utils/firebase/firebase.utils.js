import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    //FacebookAuthProvider
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
    onAuthStateChanged,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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
//use the db info
export const createUserDocFromAuth = async (userAuth, additionalUserInfo) => {
    //console.log(userAuth)
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    //console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef);
    //console.log(userSnapshot);
    //console.log(userSnapshot.exists());
    //return a boolean, check if the database has the user stored or not

    //if user data does not exists is true
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalUserInfo,
            })
        } catch (error) {
            console.log('err creating the user from google account', error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth);

export const deleteAccountUser = async (uid) => {
    await getAuth()
        .deleteUser(uid)
        .then(() => {
            console.log('Successfully deleted user');
        })
}

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

//async: due to accessing external source, 
//ex.of collectionKey is "users", "catogeries"
//ex. of objectToAdd: actual document: {title: 'hats', items:[{id:1, name:'hat1', price:20}, {...}...]}
export const addCollectionAndDoc = async (collectionKey, objectToAdd) => {
    //use to reference the collection to be added
    const collectionRef = collection(db, collectionKey);
    //store the objectToAdd (document) to collection
    const batch = writeBatch(db);
    //add the objectToAdd items to collection
    objectToAdd.forEach(object => {
        //use to reference the document to be added   
        const docRef = doc(collectionRef, object.title.toLowerCase());
        //set the batch to firebase to add the document
        batch.set(docRef, object);
    });
    //finish adding data
    await batch.commit();
    console.log('done')
}
//get categories from firebase
export const getCategoriesAndDoc = async () => {
    const collectionRef = collection(db, 'categories')
    //query and get the collection 'categories'
    const querySnapshot = await getDocs(query(collectionRef))
    //store the data from firebase to categoriesMap
    const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoriesMap;
}