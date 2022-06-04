/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Data = {
  reactions: number;
  title: string;
  body: string;
  tags: any;
};

const HomePost = ({
  data: { body, title, reactions, tags },
}: {
  data: Data;
}) => (
  <div
    css={css`
      border: solid 1px black;
      padding: 10px;
      background-color: #c0c0a5;
    `}
  >
    <h3
      css={css`
        font-size: 24px;
        color: #602aff;
        text-align: center;
        margin-bottom: 10px;
      `}
    >
      {title}
    </h3>
    <div>
      <span
        css={css`
          font-size: 16px;
          color: red;
          text-transform: uppercase;
        `}
      >
        {tags[1]}
      </span>
      :{" "}
      <span
        css={css`
          font-size: 16px;
          line-height: 20px;
        `}
      >
        {body}
      </span>
    </div>
    <div
      css={css`
        border-radius: 50%;
        background-color: red;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        float: right;
      `}
    >
      <div>{reactions}</div>
    </div>
  </div>
);

export default HomePost;
