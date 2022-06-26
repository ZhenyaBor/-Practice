/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Box = ({ children }: any) => {
  return (
    <div
      css={css`
        width: 600px;
        padding: 20px;
        margin: 100px auto;
        background-color: white;
        color: black;
        display: flex;
        justify-content: center;
      `}
    >
      {children}
    </div>
  );
};
