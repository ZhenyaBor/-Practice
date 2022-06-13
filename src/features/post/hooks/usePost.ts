import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  PostInterface} from "../interface";

export const usePost = () => {
    const [post, setPosts] = useState({} as PostInterface);
    const {postId} = useParams()
    const [loader,setLoader] = useState(true)

    useEffect(() => {
      fetch(`https://dummyjson.com/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => {          
          setPosts(data);
          setLoader(false)
        });
    }, []);
console.log(post);

    return{
        post,
        loader,
    }
     
}