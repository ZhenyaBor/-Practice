/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDataPost } from "./hooks";
import HomePost from "./components/HomePost";

export const HomeFeature = () => {
  const { posts } = useDataPost();

  return (
    <div
      css={css`
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 30px;
        padding: 0 15px;
      `}
    >
      {posts.map((post) => (
        <HomePost key={post.id} data={post} />
      ))}
    </div>
  );
};
