
import React from 'react'
import {db} from '../firebase'
import {getDocs,collection} from 'firebase/firestore'
import {useEffect,useState} from 'react'
import jiao from '/workspaces/townhall/.github/app/src/images/jiao.jpeg'


export default function DbPosts(){

    const [posts,setPosts] = useState([])

    const postsRef = collection(db,"posts")

    useEffect(()=>{
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
        getPostsList()
    },[])

//need to add functionality to the like and dislike button
    return(
        <div>
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
        </div>
    )
}


