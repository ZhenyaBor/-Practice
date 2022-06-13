/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Toolbar,Typography,AppBar} from '@mui/material'

export const HeaderMenu = ({ children }: any) => (
  <AppBar position="fixed"
  css={css`
  background-color: grey;
`}
  >
   <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <img
          src="https://www.iorecipes.com/images/profile/f88a2698-e3fb-46a4-8296-1f80b308d8e2_9cd055c2.png"
          alt="logo"
          css={css`
            width: 60px;
            height: 60px;
          `}
        />
       </Typography>
      {children}
      </Toolbar>
  </AppBar>
);
