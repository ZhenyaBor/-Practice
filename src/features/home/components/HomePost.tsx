/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostTeg } from "./PostTeg";
import { Link } from "react-router-dom";
import { PostInterface } from "../interface";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  CardActions,
  Button,
} from "@mui/material";

interface Props {
  data: PostInterface[];
}

const HomePost = ({ data }: Props) => (
  <>
    {data.map((post: PostInterface) => (
      <Card key={post.id}>
        <CardContent>
          <Typography sx={{ fontSize: 10 }} color="text.secondary">
            <Link
              to={`/post/${post.id}`}
              css={css`
                display: block;
                font-size: 24px;
                color: inherit;
                line-height: 1;
                text-align: center;
                margin-bottom: 10px;
                font-weight: 600;
                cursor: pointer;
                :hover {
                  color: red;
                  transition: all 0.5s;
                }
              `}
            >
              {post.title}
            </Link>
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary">
            {post.body}
          </Typography>

          <Stack
            sx={{ mt: 1.5 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {post.tags.map((tag: string) => (
              <PostTeg key={tag.toString()} tag={tag} />
            ))}
          </Stack>
          <CardActions sx={{ mt: 1.5 }}>
            <div>🖤 {post.reactions}</div>
            <Link to={`/editPost/${post.id}`}>
              <div>
                <Button sx={{ ml: 11 }} variant="outlined">
                  edit message
                </Button>
              </div>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    ))}
  </>
);

export default HomePost;
