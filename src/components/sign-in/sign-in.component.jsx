import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';


const SignIn = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.log('error signing in')
        }

    }


        return(
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span> Sign in with your email and password </span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={e => setEmail(e.target.value)} name="email" type="email" value={email} label="Email" required />
                <FormInput handleChange={e => setPassword(e.target.value)} name="password" type="password" value={password} label="Password" required />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>)
}

export default SignIn;