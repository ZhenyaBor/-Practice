/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {useEffect,useState} from 'react';
import HomePost from './components/HomePost';

interface PostInterface{
    id:number
    title:string
    body:string
     reactions:number
     tags:[]
}

export const HomeFeature = () =>{
    const [posts,setPosts] = useState([] as ReadonlyArray<PostInterface>)

useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=10')
    .then(res => res.json())
    .then((data)=>{
        setPosts(data.posts)
    });
}, [])
 
    return(
        <div      
         css={css`
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 30px;
        padding: 0 15px;
      `}>
            {posts.map((post)=>(
                <HomePost key={post.id} data={post}/>
            ))}
        </div>
    )
}