import { useState, useContext } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
//import { auth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input-component'
import './sign-up-style.scss'
import Button from '../button/button.component'
//import { UserContext } from '../../contexts/user-context'

const SignUp = () => {
    //onAuthStateChanged, the centralized state linstener can listen to the state change of authentication
    //const [setCurrentUser] = useContext(UserContext)

    const defaultFormField = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formField, setFormField] = useState(defaultFormField)

    const resetFormField = () => {
        setFormField(defaultFormField)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });  //it's an object inside ({  })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = formField;
        //check password match and length
        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        } else if (password.length < 6) {
            alert('password must be at least 6 characters')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            //console.log(response.user) 
            await createUserDocFromAuth(user, { displayName })
            resetFormField();
            //setCurrentUser(user)
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('this email already exist')
            } else {
                console.log('hmm.. something wrong when creating new account', error)
            }
            resetFormField();
        }
    }
    const { displayName, email, password, confirmPassword } = formField;

    const inputOptions = [
        {
            label: 'User Name',
            type: 'text',
            name: 'displayName',
            value: displayName,
            onChange: handleChange
        },
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
        },
        {
            label: 'Confirm password',
            type: 'password',
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: handleChange
        }
    ]


    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <form onSubmit={handleSubmit} className='signUpForm'>
                {inputOptions.map(inputOption => (
                    <FormInput key={inputOption.label} inputOption={inputOption} />
                ))}
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default SignUp