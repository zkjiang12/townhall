

import React from 'react'
import jiao from '/workspaces/townhall/.github/app/src/images/jiao.jpeg'
import LogOut from '/workspaces/townhall/.github/app/src/components/LogOut.js'

export default function UserInfo(props){
    const setStatus = props.setStatus
    const [state,setState] = React.useState(false)
    const [anonymous,setAnonymous] = React.useState('Anonymous')

    function Change(){
        setState(prevState=>!prevState)
        state ? setAnonymous('Anonymous') : setAnonymous('Not Anonymous')
    }
    function setFalse(){
        setStatus(false)
    }

    console.log(props)
    return(
        <div className = 'user--info'>
            <img src = {jiao} className = 'user--IMG' alt = 'jiao'/>
            <h3>User Name </h3>
            <h5>UserEmail@lawrenceville.org</h5>
            <button onClick = {Change} className = 'identity--toggle'>{anonymous}</button>
            <LogOut/>
            <button onClick = {setFalse} className = 'close--page--button'>Close Page</button>
        </div>
    )
}