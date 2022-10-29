import { useState, useContext } from 'react'
import {
    createUserDocFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
//import { auth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input-component'
import './sign-in-style.scss'
import Button from '../button/button.component'
//import { UserContext } from '../../contexts/user-context'

const SignIn = () => {

    const defaultFormField = {
        email: '',
        password: '',
    }

    const [formField, setFormField] = useState(defaultFormField)
    //onAuthStateChanged, the centralized state linstener can listen to the state change of authentication
    //const { setCurrentUser } = useContext(UserContext)

    const resetFormField = () => {
        setFormField(defaultFormField)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });  //it's an object inside ({  })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            //setCurrentUser(response.user)
            resetFormField();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password/email combination')
                    break;
                case 'auth/user-not-found':
                    alert('no user found')
                    break;
                default:
                    console.log('hmm.. something wrong when creating new account', error)
            }
            resetFormField();
        }
    }
    const { email, password } = formField;

    const signInWithGoogleAcct = async () => {
        await signInWithGooglePopup();
        //setCurrentUser(response.user)
        //below is moved to user-context.jsx
        //await createUserDocFromAuth(response.user)
    }

    const inputOptions = [

        {
            label: 'Email',
            type: 'email',
            name: 'email',
            value: email,
            onChange: handleChange
        },
        {
            label: 'Password',
            type: 'password',
            name: 'password',
            value: password,
            onChange: handleChange
        }
    ]

    return (
        <div className='sign-in-container'>
            <form onSubmit={handleSubmit}>
                <h1>Sgin in</h1>
                {inputOptions.map(inputOption => (
                    <FormInput key={inputOption.label} inputOption={inputOption} />
                ))}
                <div className='buttons-container'>
                    <Button
                        type='submit'
                        style={{ marginBottom: '10px' }}
                    >Sign in
                    </Button>
                    <Button
                        type='button'
                        buttonType='google'
                        onClick={signInWithGoogleAcct}
                    >Google Sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn