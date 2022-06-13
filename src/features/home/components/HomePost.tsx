/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostTeg from "./PostTeg";
import { Link } from "react-router-dom";
import { Data } from "../interface";
import { Card,CardContent,Typography,CardActions } from '@mui/material';



const HomePost = ({
  data: { body, title, reactions, tags, id },
}: {
  data: Data;
}) => (
<Card >
<CardContent>
<Typography sx={{ fontSize: 10 }} color="text.secondary" >
      <Link
        to={`/post/${id}`}
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
        {title}
      </Link>
      </Typography>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" >
        {body}
      </Typography>

      <CardActions sx={{ mt: 1.5 }}>
      {tags.map((tag) => (
        <PostTeg key={tag.toString()} tag={tag} />
      ))}
    </CardActions>
    <CardActions sx={{ mt: 1.5 }}>
      <div>🖤 {reactions}</div>
      </CardActions>
    </CardContent>
    </Card>
);

export default HomePost;
