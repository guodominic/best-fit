//below import is for redirect auth
/* import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'; */
import SignUp from '../../components/sign-up-form/sign-up-form';
import SignIn from '../../components/sign-in-form/sign-in-form';
import './authentication.scss'

const Authentication = () => {

    //redirect is more userfriendly for mobile app
    /*     useEffect(async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocFromAuth(response.user)
                console.log(response.user);
            }
        }, []) */


    return (
        <div className='authentication-container'>
            <SignIn />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
            <SignUp />
        </div>
    )
}

export default Authentication