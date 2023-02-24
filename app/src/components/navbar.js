import React from 'react'
import jiao from '/workspaces/townhall/app/src/images/jiao.jpeg'

export default function NavBar(){
    return (
        <nav>
            <img src = {jiao} alt = "dog with fiery sun glasses" className = "nav--img"/>
            <h1 className = "nav--title">Town Hall</h1>
            <h4 className = "nav--school">Lawrenceville School</h4>
        </nav>
    )
}