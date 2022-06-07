import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
    reactions: number;
    tags: [];
  }

export const usePost = () => {
    const [posts, setPosts] = useState([] as ReadonlyArray<Post>);

    useEffect(() => {
      fetch("https://dummyjson.com/posts/1")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }, []);

    return{
        posts,
    }
     
}