import { useEffect, useState } from "react";
import {PostInterface} from "../interface";

export const useDataPost = () => {

    const [posts, setPosts] = useState([] as ReadonlyArray<PostInterface>);
    const [loader,setLoading] = useState(true)
    

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=12")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false)
      });
  },[]);

  return{
      posts,
      loader,
  }
}
