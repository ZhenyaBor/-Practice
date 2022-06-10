import PostTeg from "../home/components/PostTeg";
import Loadong from "../loading/Loadong";
import Post from "./components/Post";
import {usePost} from "./hooks/usePost";
import { PostInterface } from "./interface";


interface Props{
  post : PostInterface
  loader:boolean
}

export const MorePost = () => {
  const { post, loader}: Props = usePost();

  if(loader){
    return <Loadong/>
  }

  return (
    <>
      <Post post={post}>
        {post.tags?.map((tag) => {
          return <PostTeg key={Math.random()} tag={tag} />;
        })}
      </Post>
    </>
  );
};
