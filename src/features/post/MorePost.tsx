import PostTeg from "../home/components/PostTeg";
import Post from "./components/Post";
import {usePost } from "./hooks/usePost";
import { PostInterface } from "./interface";

interface Props{
  post : PostInterface
}

export const MorePost = () => {
  const { post }: Props = usePost();
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
