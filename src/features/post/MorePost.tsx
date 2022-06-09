import PostTeg from "../home/components/PostTeg";
import Post from "./components/Post";
import { usePost } from "./hooks/usePost";

export const MorePost = () => {
  const { post } = usePost();
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
