/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { usePost } from "./hooks/usePost";

export const MorePost = () => {
    const { posts }:any = usePost();
    return (
      <div
      css={css`
      border: solid 1px black;
      padding: 10px;
      background-color: #c0c0a5;
      border-radius: 10px;
      font-size: 25px;
    `}
      >
          <p><span
                css={css`
                color:red;
              `}
          >{posts.title}</span>: {posts.body}</p>
         <div> {posts.tags}</div>
        
      </div>
    );
  };
  
