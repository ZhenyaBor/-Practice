import { useDataPost } from "./hooks";
import HomePost from "./components/HomePost";
import HomePosts from "./components/HomePosts";
import Loading from "../loading/Loadong";

export const HomeFeature = () => {
  const { posts, loader } = useDataPost();

  if (loader) {
    return <Loading />;
  }

  return (
    <>
      <HomePosts>
        {posts.map((post) => (
          <HomePost key={post.id} data={post} />
        ))}
      </HomePosts>
    </>
  );
};
