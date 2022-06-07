import PostTeg from "../home/components/PostTeg";
import Post from "./components/Post";
import { usePost } from "./hooks/usePost";

export const MorePost = () => {
  const { post }: any = usePost();
  return (
    <>
      <Post post={post}>
        {post.tags?.map((tag: any) => {
          return <PostTeg key={Math.random()} tag={tag} />;
        })}
      </Post>
    </>
  );
};
