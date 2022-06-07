/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { usePost } from "../hooks/usePost";
  
export const PostItems = () => {

  const { post:{body,title,tags} }:any = usePost();

  return(
    <div
    css={css`
    border: solid 1px black;
    padding: 10px;
    background-color: #c0c0a5;
    border-radius: 10px;
    font-size: 25px;
    width:50%;
    margin:auto;
  `}
    >
        <p><span
              css={css`
              color:red;
            `}
        >{title}</span>: {body}</p>
       <div>{tags}</div>
      
    </div>
  )
}