import { useEffect, useState } from "react";

interface PostInterface {
    id: number;
    title: string;
    body: string;
    reactions: number;
    tags: [];
  }

export const useDataPost = () => {

    const [posts, setPosts] = useState([] as ReadonlyArray<PostInterface>);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  },[]);

  return{
      posts,

  }
}


