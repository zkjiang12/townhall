import React from "react";

export default function Comment(props){
    const setComment = props.setComment
    const comment = props.comment

    return(
        <div className = 'comment'>
            <h4>Thoughts</h4>
            <textarea
                className = 'comment--text'
                required
                value = {comment}
                onChange={(e)=>setComment(e.target.value)}
                >
            </textarea>
        </div>
    )
}