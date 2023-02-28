
import React from 'react'
import {db} from '../firebase'
import {getDocs,collection} from 'firebase/firestore'
import {useEffect,useState} from 'react'

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

    return(
        <div>
            {posts.map((post)=>(
                <div>
                    <h3 className = 'post--title'>{post.title}</h3>
                    <p className = 'post--content'>{post.content}</p>
                    <button className = 'like--button'>{post.likes}</button>
                    <button className = 'dislike--button'>{post.dislikes}</button>
                </div>
            ))}
        </div>
    )
}
