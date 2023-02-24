import React from 'react'
import jiao from '/workspaces/townhall/.github/app/src/images/jiao.jpeg'
import LogOut from '/workspaces/townhall/.github/app/src/components/LogOut.js'


export default function NavBar(){
    return (
        <nav>
            <img src = {jiao} alt = "dog with fiery sun glasses" className = "nav--img"/>
            <h1 className = "nav--title">Town Hall</h1>
            <h4 className = "nav--school">Lawrenceville School</h4>

            <LogOut/>


        </nav>
    )
}