import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        //console.log(response);
        const userDocRef = createUserDocFromAuth(response.user)
    }

    return (
        <div>
            <h1>Sgin in</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    )
}

export default SignIn