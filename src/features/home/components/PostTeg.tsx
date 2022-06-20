/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

type tag = {
  tag: string;
};

export const PostTeg = ({ tag }: tag) => (
  <Button
    variant="contained"
    href="#contained-buttons"
    css={css`
      padding: 0 10px;
      background-color: #520101;
    `}
  >
    {tag}
  </Button>
);
