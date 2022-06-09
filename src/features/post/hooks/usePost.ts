import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
    id: number;
    title: string;
    body: string;
    reactions: number;
    tags: string[];
  }

export const usePost = () => {
    const [post, setPosts] = useState({} as Post);
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