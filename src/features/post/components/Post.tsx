import { ReactNode } from "react";
import {Typography, CardContent,Container,Card,Stack}from '@mui/material';


interface Props {
  children: ReactNode;
  post: { title: string; body: string };
}

function Post({ children, post }: Props) {
  return (
    <>
    <Container sx={{ padding:"90px"}}>
    <Card >
         <CardContent >
         <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          {post.title}
          </Typography>
          <Typography sx={{ fontSize: 16 }} component="div">
        {post.body}
     </Typography>
     <Stack
     sx={{ mt: 1.5 }}
  direction="row"
  spacing={2}
>
        {children}
        </Stack>
      </CardContent>
    </Card>
    </Container>
    </>
  );
}

export default Post;


