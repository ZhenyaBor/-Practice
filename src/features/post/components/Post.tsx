/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Post {
  children: ReactNode;
  post: { title: string; body: string };
}

function Post({ children, post }: Post) {
  return (
    <div
      css={css`
        background-color: #c0c0a5;
        border-radius: 10px;
        font-size: 25px;
        width: 50%;
        margin: auto;
        padding: 10px;
      `}
    >
      <div>
        <span
          css={css`
            color: red;
          `}
        >
          {post.title}
        </span>{" "}
        {post.body}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 10px;
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default Post;
