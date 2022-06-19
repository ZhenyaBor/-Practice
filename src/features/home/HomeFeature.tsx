import { useDataPost } from "./hooks";
import HomePost from "./components/HomePost";
import HomePosts from "./components/HomePosts";
import Loading from "../loading/Loadong";
import Pagination from "./components/Pagination";

export const HomeFeature = () => {
  const { posts, loader, onChangePagination, pagination } = useDataPost();

  if (loader) {
    return <Loading />;
  }

  return (
    <>
      <HomePosts>
        <HomePost data={posts} />
      </HomePosts>
      <Pagination onChenge={onChangePagination} pagination={pagination} />
    </>
  );
};
