/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";
import Card from '@mui/material/Card';
import {Typography, CardContent,Container}from '@mui/material';


interface Props {
  children: ReactNode;
  post: { title: string; body: string };
}

function Post({ children, post }: Props) {
  return (
    <>
    <Container sx={{ paddingTop:"90px"}}>
    <Card >
         <CardContent >
         <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          {post.title}
          </Typography>
          <Typography sx={{ fontSize: 16 }} component="div">
        {post.body}
     </Typography>
         <div
        css={css`
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 10px;
        `}
      >
        {children}
      </div>
      </CardContent>
    </Card>
    </Container>
    </>
  );
}

export default Post;


