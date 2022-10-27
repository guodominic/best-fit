import {
    //auth,
    signInWithGooglePopup,
    createUserDocFromAuth,
    signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils'
//below import is for redirect auth
/* import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'; */
import SignUp from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {

    //redirect is more userfriendly for mobile app
    /*     useEffect(async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocFromAuth(response.user)
                console.log(response.user);
            }
        }, []) */

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        //console.log(response);
        const userDocRef = await createUserDocFromAuth(response.user)
    }

    return (
        <div>
            <h1>Sgin in</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
            <SignUp />
        </div>
    )
}

export default SignIn