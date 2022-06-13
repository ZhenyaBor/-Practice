/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Child {
  children: ReactNode;
}

const HomePosts = ({ children }: Child) => {
  return (
    <div
      css={css`
        max-width: 1400px;
        margin: auto;
        margin-top: 90px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 30px;
        padding: 0 15px;
      `}
    >
      {children}
    </div>
  );
};

export default HomePosts;
