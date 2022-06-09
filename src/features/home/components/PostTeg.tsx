/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type tag = {
  tag: string;
};

const PostTeg = ({ tag }: tag) => {
  return (
    <button
      css={css`
        border: solid 1px black;
        padding: 5px;
        background-color: #1e434c;
        color: white;
        border-radius: 5px;
        text-transform: uppercase;
      `}
    >
      {tag}
    </button>
  );
};

export default PostTeg;
