/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { MenuNav } from "../interface";

interface Props {
  item: MenuNav;
}

const HeaderItemMenu = ({ item: { name, url } }: Props) => {
  return (
    <MenuItem>
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
    </MenuItem>
  );
};

export default HeaderItemMenu;
