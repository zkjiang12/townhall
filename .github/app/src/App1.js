
import NavBar from './components/navbar'
import Page from './components/page'
import Form from './components/form'

import jiao from '/workspaces/townhall/.github/app/src/images/jiao.jpeg'
import addSign from '/workspaces/townhall/.github/app/src/images/addSign.png'

import React from 'react'
import {useEffect,useState} from 'react'

import {db} from './firebase'
import {auth} from './firebase'
import {useAuthState } from 'react-firebase-hooks/auth'
import {getDocs,addDoc,collection} from 'firebase/firestore'



export default function App() {
    const [user] = useAuthState(auth)
    const [name,setName] = useState('Input Title')
    const [content,setContent] = useState('Input Your Thoughts')
    const [posts,setPosts] = useState([])

    const postsRef = collection(db,"posts")

    const [formDisplay,setFormDisplay] = useState(false)

    const getPostsList = async() => {
        try{
            const data = await getDocs(postsRef)
            const PostsList = data.docs.map((post)=>({
                ...post.data(),
                id:post.id
            }))
            setPosts(PostsList)
            console.log(PostsList)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
       getPostsList()
    },[])

    function postContent(){
        addDoc(postsRef,{
        title:name, 
        content:content,
        likes:0,
        dislikes:0
     })
     getPostsList()
    }

    function displayForm(){
        setFormDisplay(prevDisplay => !prevDisplay)
    }

//need to add functionality to the like and dislike button
    return(
        <div>
            <div>
                {  user ? 
                // if user is logged in, render full page
                <div>
                    <NavBar/>
            
                    {posts.map((post)=>(
                    <div className = 'post--container'>
                        <div className = 'img--container'>
                            <img src = {jiao} className = 'post--foto' alt = 'jiao'/>
                        </div>
                        <div className = 'post--info'>
                            <h3 className = 'post--title'>{post.title}</h3>
                            <p className = 'post--content'>{post.content}</p>
                            <button onClick = {''} className = 'like--button'>{post.likes}</button>
                            <button onClick = {''} className = 'dislike--button'>{post.dislikes}</button>
                        </div>
                    </div>
                     ))}

                    {formDisplay ? 
                    <div className = 'create'>
                    
                    <Form 
                        title = {name} 
                        setTitle = {setName}
                        body = {content} 
                        setBody={setContent}
                    />
                    <button onClick = {postContent}>Submit</button>
                    </div>: ''}
                    <img src = {addSign} type = 'button' onClick = {displayForm} className = 'form-input-button' alt = 'plus sign' />
                </div>

                // if not logged in then only render part of it
                : <Page/>
                }     
            </div>
      </div>
    )
  }
  

