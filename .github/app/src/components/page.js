import React from 'react'
import SignIn from './SignIn'
import jiao from '/workspaces/townhall/.github/app/src/images/jiao.jpeg'

// make like a small random for fun application on the not logged in page
export default function Page(){
    const [state,setState] = React.useState()

    function Comment(){
        setState(prevState => !prevState)
    }

    return(
        <div className = 'homepage'>
            <SignIn className = 'button'/>

            <img src ={jiao} type = 'button' onClick={Comment} className = 'test--image--button' alt = 'jiaojiao'/>
            {state ? <h1>Hi</h1>:<h1>{''}</h1>}

            <img src ={jiao} type = 'button' onClick={Comment} className = 'test--image--button' alt = 'jiaojiao'/>
            {state ? <h1>Hi</h1>:<h1>{''}</h1>}


        </div>
    )
}