/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
  item: {
    name: string;
    url: string;
  };
}

const HeaderItemMenu = ({ item: { name, url } }: Props) => {
  return (
    <li>
      <Link
        css={css`
          color: white;
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
