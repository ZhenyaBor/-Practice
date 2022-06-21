import { useEffect, useRef, useState } from "react";
import {PostInterface} from "../interface";

export const useDataPost = () => {

    const [posts, setPosts] = useState([] as PostInterface []);
    const [loader,setLoading] = useState(true)
    const isSetTotal = useRef(false)
    const[pagination, setPagination] = useState({
      limit:12,
      total:10,
      page:1
    })

    const onChangePagination =(e:any,value:number) =>{
      setPagination({...pagination, page: value})
    }

  useEffect(() => {
    const {page,limit} = pagination
    const nextSkip = page === 1? 0 : (page-1) * limit;
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${nextSkip}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false)
        if(!isSetTotal.current){
          setPagination({...pagination, total: Math.round(data.total/pagination.limit)})
          isSetTotal.current = true
        }
      });
  },[pagination.page]);
  
  

  return{
      posts,
      loader,
      pagination,
      onChangePagination,
  }
}
