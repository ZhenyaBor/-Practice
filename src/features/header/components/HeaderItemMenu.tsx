/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const HeaderItemMenu = ({ item: { name, url } }: any) => {
  return (
    <li>
      <Link
        css={css`
          color: black;
          font-size: 20px;
          font-weight: 600;
          :hover {
            text-decoration: underline;
          }
        `}
        to={url}
      >
        {name}
      </Link>
    </li>
  );
};

export default HeaderItemMenu;
