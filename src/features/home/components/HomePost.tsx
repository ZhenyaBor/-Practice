/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Data = {
  reactions:number;
  title: string;
  body: string;
  tags:any
};

const HomePost = ({ data: { body,title,reactions,tags }}: { data: Data }) =>(
    <div css={css`
    border:solid 1px black;
    padding:10px;
`}>
        <h3 css={css`
        font-size:20px;
        color:red;
        text-align:center;
        margin-bottom:10px;
    `}>{title}</h3>
        <div><span 
        css={css`
        font-size:16px;
        color:red;
        text-transform:uppercase;
    `}>{tags[1]}</span>: <span>{body}</span></div>
     <div 
     css={css`
    border-radius:50%;
    background-color:red;
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
   align-items:center;
   margin-top:20px;
`}
  ><div css={css`
  

`}>{reactions}</div></div>
    </div>

)





export default HomePost
