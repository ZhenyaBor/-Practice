/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const HeaderMenu = ({ children }: any) => (
  <header
    css={css`
      background-color: grey;
      height: 50px;
      display: flex;
      margin-bottom: 40px;
      padding: 0 20px;
    `}
  >
    <div
      css={css`
        width: 60%;
        display: flex;
        align-items: center;
      `}
    >
      <div>
        {" "}
        <img
          src="https://www.iorecipes.com/images/profile/f88a2698-e3fb-46a4-8296-1f80b308d8e2_9cd055c2.png"
          alt="logo"
          css={css`
            width: 60px;
            height: 60px;
          `}
        />
      </div>
    </div>
    <ul
      css={css`
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      {children}
    </ul>
  </header>
);
