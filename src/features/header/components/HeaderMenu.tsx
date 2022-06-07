/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const HeaderMenu = ({ children }: any) => (
  <header
    css={css`
      background-color: wheat;
      height: 50px;
      display: flex;
      margin-bottom: 40px;
    `}
  >
    <div
      css={css`
        width: 60%;
      `}
    ></div>
    <ul
      css={css`
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
      `}
    >
      {children}
    </ul>
  </header>
);
