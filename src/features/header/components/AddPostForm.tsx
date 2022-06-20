/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";

export const AddPostForm = () => {
  return (
    <form
      css={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 300px;
      `}
    >
      <TextField name="title" label="Title" variant="outlined" />
      <TextField name="description" label="Description" variant="outlined" />
    </form>
  );
};
