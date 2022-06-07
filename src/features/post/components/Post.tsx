/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Post({ children, post }: any) {
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
          {post.title}
        </span>
        : {post.body}
      </p>
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
