import React from 'react'
import { GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
import { auth } from '../firebase';


const SignIn = () => {
    function LogIn(){
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    }

    return(
        <dib className = 'SignIn'>
            <button onClick={LogIn}>Sign In</button>
        </dib>
    )
}

export default SignIn