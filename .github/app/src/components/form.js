

import React from "react";

// import {useState} from 'react'

export default function Form(props){
    const title=props.title
    const setTitle =  props.setTitle

    const body=props.body
    const setBody=props.setBody

    return(
        <div>
            <div className = 'form--heading'>
                <h3 className = 'form--heading--text'>Add a New Post</h3>
            </div>
            <div className = 'form--main'>
                <h4 className="form--title">Post Title:</h4>
                <textarea
                    className = 'form--title--input'
                    type="text"
                    required
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)} //e = event object
                >
                </textarea>

                <h4 className = "form--body">Post Body:</h4>
                <textarea
                    className = 'form--body--text'
                    required
                    value = {body}
                    onChange ={(e)=>setBody(e.target.value)}
                >
                </textarea>
               
                <h4>{title}</h4>
                <p>{body}</p>
            </div>

        </div>
    )
}

 /* <label>Post Author:</label>
                <select>
                    <option value = "mario">mario</option>
                    <option value = "yoshi">yoshi</option>
                </select> */
