/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostTeg from "./PostTeg";
import { Link } from "react-router-dom";

type Data = {
  id: number;
  reactions: number;
  title: string;
  body: string;
  tags: string[];
};

const HomePost = ({
  data: { body, title, reactions, tags, id },
}: {
  data: Data;
}) => (
  <div
    css={css`
      border: solid 1px black;
      padding: 10px;
      background-color: #c0c0a5;
      border-radius: 10px;
    `}
  >
    <h3
      css={css`
        font-size: 24px;
        color: #602aff;
        text-align: center;
        margin-bottom: 10px;
        font-weight: 600;
        cursor: pointer;
        :hover {
          text-transform: uppercase;
          text-decoration: underline;
          transition: all 0.5s;
          color: red;
        }
      `}
    >
      <Link to={`/post/${id}`}>{title}</Link>
    </h3>
    <div
      css={css`
        margin-bottom: 10px;
      `}
    >
      <span
        css={css`
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
        `}
      >
        {body}
      </span>
    </div>
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
      `}
    >
      {tags.map((tag: string) => (
        <PostTeg key={tag.toString()} tag={tag} />
      ))}
    </div>
    <div
      css={css`
        border-radius: 50%;
        width: 50px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      `}
    >
      <div>🖤 {reactions}</div>
    </div>
  </div>
);

export default HomePost;
