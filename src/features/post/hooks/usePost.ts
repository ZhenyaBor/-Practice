import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
    reactions: number;
    tags: string[];
  }

export const usePost = () => {
    const [post, setPosts] = useState({} as Post);
    console.log(post)

    useEffect(() => {
      fetch("https://dummyjson.com/posts/1")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }, []);

    return{
        post,
    }
     
}