
import React from 'react'
import NavBar from './components/navbar'
import Posts from './components/posts'
// import Inputs from './components/input'
import Odata from './data'
import Form from './components/form'
import {useState} from 'react'

export default function App() {
  const [name,setName] = useState('hi')
  const [content,setContent] = useState('hi')
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



  return (
    <div>
      <NavBar/>
      {posts}

      <div className = 'create'>
        <Form 
          title = {name} 
          setTitle = {setName}
          body = {content} 
          setBody={setContent}
        />
        <button onClick = {postContent}>Submit</button>
      </div>
    </div>
  );
}


