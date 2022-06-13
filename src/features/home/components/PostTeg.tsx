/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Button} from '@mui/material';

type tag = {
  tag: string;
};

const PostTeg = ({ tag }: tag) => {
  return (
    <>
    <Button  variant="contained" href="#contained-buttons"
    css={css`
    padding:0 10px;
    background-color:#520101;
  `}
    >
      {tag}
    </Button>
    </>
  );
};

export default PostTeg;
