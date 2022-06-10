import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  PostInterface} from "../interface";

export const usePost = () => {
    const [post, setPosts] = useState({} as PostInterface);
    const {postId} = useParams()
    console.log(postId)

    useEffect(() => {
      fetch(`https://dummyjson.com/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }, []);

    return{
        post,
    }
     
}