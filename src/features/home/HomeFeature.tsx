import {useEffect,useState} from 'react';

export const HomeFeature = () =>{
    const [posts,setPosts] = useState([{}])

useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=10')
    .then(res => res.json())
    .then((data)=>{
        setPosts(data.posts)
    });
}, [])
 
    return(
        <div>
            {posts.map((post:any)=>(
                <div key={post.userId}>
                    <h3>{post.title}</h3>
                    <div><span>{post.tags['0']}</span> : {post.body}</div>
                    <div>{post.reactions}</div>
                </div>
            ))}
        </div>
    )
}