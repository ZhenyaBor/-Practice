import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditPostInterface } from "../interface";

export const useEditPost = () => {
  const [editpost, setEditPosts] = useState({} as EditPostInterface);
  const { editpostId } = useParams();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${editpostId}`)
      .then((res) => res.json())
      .then((data) => {
        setEditPosts(data);
        setLoader(false);
      });
  }, []);
  return {
    editpost,
    loader,
  };
};
