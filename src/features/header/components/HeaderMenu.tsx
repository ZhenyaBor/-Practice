/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Toolbar, Stack, AppBar, Button, Divider } from "@mui/material";
import { ReactNode } from "react";
import Popup from "./Popup";

interface Children {
  children: ReactNode;
}

export const HeaderMenu = ({ children }: Children) => (
  <AppBar
    position="fixed"
    css={css`
      background-color: grey;
    `}
  >
    <Toolbar>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        width={"100%"}
        alignItems="center"
      >
        <img
          src="https://www.iorecipes.com/images/profile/f88a2698-e3fb-46a4-8296-1f80b308d8e2_9cd055c2.png"
          alt="logo"
          css={css`
            width: 60px;
            height: 60px;
          `}
        />
        <Popup />
      </Stack>
      {children}
    </Toolbar>
  </AppBar>
);
