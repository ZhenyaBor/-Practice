/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostTeg from "../../home/components/PostTeg";
import { usePost } from "../hooks/usePost";

export const PostItems = () => {
  const {
    post: { body, title, tags },
  }: any = usePost();

  return (
    <div
      css={css`
        border: solid 1px black;
        padding: 10px;
        background-color: #c0c0a5;
        border-radius: 10px;
        font-size: 25px;
        width: 50%;
        margin: auto;
      `}
    >
      <p>
        <span
          css={css`
            color: red;
          `}
        >
          {title}
        </span>
        : {body}
      </p>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 10px;
        `}
      >
        {tags?.map((tag: any) => {
          return <PostTeg key={Math.random()} tag={tag} />;
        })}
      </div>
    </div>
  );
};
