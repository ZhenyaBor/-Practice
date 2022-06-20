import { PostTeg } from "../home/components/PostTeg";
import Loading from "../loading/Loadong";
import Post from "./components/Post";
import { usePost } from "./hooks/usePost";
import { PostInterface } from "./interface";

interface Props {
  post: PostInterface;
  loader: boolean;
}

export const MorePost = () => {
  const { post, loader }: Props = usePost();

  if (loader) {
    return <Loading />;
  }

  return (
    <Post post={post}>
      {post.tags.map((tag) => {
        return <PostTeg key={tag} tag={tag} />;
      })}
    </Post>
  );
};
