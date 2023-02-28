import React from 'react'
import { GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
import { auth } from '../firebase';


const SignIn = () => {
    function LogIn(){
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    }
    console.log({auth})
    console.log(1)
    return(
        <div className = 'SignIn'>
            <button onClick={LogIn}>Sign In</button>
        </div>
    )
}

export default SignIn