import { useDataPost } from "./hooks";
import HomePost from "./components/HomePost";
import HomePosts from "./components/HomePosts";

export const HomeFeature = () => {
  const { posts } = useDataPost();

  return (
    <div>
      <HomePosts>
        {posts.map((post) => (
          <HomePost key={post.id} data={post} />
        ))}
      </HomePosts>
    </div>
  );
};
