
import React from 'react'
import NavBar from './components/navbar'
import Posts from './components/posts'
import Page from './components/page'
import DbPosts from './components/DbPosts'


// import Inputs from './components/input'
import Odata from './data'
import Form from './components/form'
import {useState} from 'react'

import {auth} from './firebase'
import {useAuthState } from 'react-firebase-hooks/auth'

import addSign from '/workspaces/townhall/.github/app/src/images/addSign.png'


export default function App() {
  const [name,setName] = useState('Input Title')
  const [content,setContent] = useState('Input Your Thoughts')
  const [data,setData] = useState(Odata)

  const posts = data.map(item => {
    console.log(data)
    return(
      <Posts
        title = {item.title}
        description = {item.description}
        likes = {item.likes}
      />
    )
    

  })

  function postContent(){
    setData(prevData => [...prevData,{
      title: `Problems: ${name}`,
      description: `Solution: ${content}`,
      likes: 0
    }])
  }

  const [user] = useAuthState(auth)
  const [formDisplay,setFormDisplay] = useState(false)

  function displayForm(){
      setFormDisplay(prevDisplay => !prevDisplay)
  }

  return (
    <div>
      {  user ? 
        // if user is logged in, render full page
        <div>
          <NavBar/>

          {/* DbPosts is to test getting data from firestroe database */}
          <DbPosts/> 

          {/* {posts}, this is the actual code so far, but will be deleted once I style DbPosts */}

          {posts}

         
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
  );
}


