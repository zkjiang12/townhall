import React from 'react'
import placeholder from '/workspaces/townhall/app/src/images/placeholder.jpeg'

export default function Posts(props){

    //classify urgency of problem based on likes
    let text 
    if (props.likes >= 1000){
        text = 'Urgent'
    }
    else if (props.likes >= 100){
        text = 'Mild'
    }
    else{
        text = 'Not a Problem'
    }


    // record and update number of likes a post has
    //add functionality and styling for the like and dislike buttons

    const [userChoiceL, setUserChoiceL] = React.useState(false)
    const [userChoiceD, setUserChoiceD] = React.useState(false)
    const [likes, setLikes] = React.useState(0)
    const [dislikes, setDislikes] = React.useState(0)

    function changeLikes(){
        if (userChoiceD === true){
            setLikes(likes)
        }
        else{
            setLikes(userChoiceL ? likes-1:likes+1) //if alreaddy liked, then this would subtract the like, else add a like
            setUserChoiceL(!userChoiceL)
        }
        }
       
    function changeDislikes(){
        if (userChoiceL ===  true){
            setDislikes(dislikes)
        }
        else{
            setDislikes(userChoiceD ? dislikes-1:dislikes+1)
            setUserChoiceD(!userChoiceD)
        }
    }


    return(
        <div className = 'post'>
            <div className = 'content'>
                <img src = {placeholder} alt = 'jiao looking stunned' className = 'placeholderIMG'/>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <p>Status: {text}</p>
                </div>
            </div>
            <div className = 'buttons'>
                <button className = 'like--button' onClick = {changeLikes}>Like</button>
                <p className = "likes--count">{likes}</p>
                <button className = 'dislike--button' onClick = {changeDislikes}>Dislike</button>
                <p className = "dislikes--count" >{dislikes}</p>
            </div>
        </div>
    )
}
// add like a discussion forum in the future maybe?