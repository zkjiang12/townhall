import React from 'react'
import {auth} from '../firebase'

const LogOut = () => {
    const signOut = () =>{
        signOut(auth)
    }
    return(
        <div>
            <button onClick = {() => auth.signOut()} className  = 'LogOut--button'>Log Out</button>
        </div>
    )
}
export default LogOut