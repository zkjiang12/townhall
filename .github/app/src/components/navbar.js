import React from 'react'
import jiao from '/workspaces/townhall/.github/app/src/images/jiao.jpeg'
import UserInfo from './UserInfo'

export default function NavBar(){
    const [status,setStatus] = React.useState(false)

    function setTrue(){
        setStatus(true)
    }
    return (
        <nav>
            <img src = {jiao} alt = "dog with fiery sun glasses" className = "nav--img"/>
            <h1 className = "nav--title">Town Hall</h1>
            <h4 className = "nav--school">Lawrenceville School</h4>
            
            {/* make this into a popup */}
            {
                status?<UserInfo
                        status = {status}
                        setStatus = {setStatus}
                        />
                :<img src = {jiao} type = 'button' onClick = {setTrue} alt = 'dog' className = 'user--info--image'/>
            }
           
        </nav>
    )
}