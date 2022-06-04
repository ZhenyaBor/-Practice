/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const ResetPage = ({ children }: any) => (
  <div
    css={css`
      * {
        padding: 0;
        margin: 0;
        border: 0;
        font-family: "Raleway", sans-serif;
        font-weight: 300;
      }
      *,
      *:before,
      *:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      :focus,
      :active {
        outline: none;
      }

      a:focus,
      a:active {
        outline: none;
      }

      nav,
      footer,
      header,
      aside {
        display: block;
      }

      html,
      body {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-size: 100%;
        line-height: 1;
        font-size: 16px;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      input,
      button,
      textarea {
        font-family: inherit;
      }

      input::-ms-clear {
        display: none;
      }

      button {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        padding: 0;
        border: 0;
      }

      a,
      a:visited {
        text-decoration: none;
      }

      a:hover {
        text-decoration: none;
      }

      ul li {
        list-style: none;
      }

      img {
        vertical-align: top;
      }

      p {
        margin: 0px;
        padding: 0px;
      }
    `}
  >
    {" "}
    {children}{" "}
  </div>
);
