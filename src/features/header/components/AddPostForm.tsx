/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { usePostHoks } from "./hook/usePostHoks";

interface Props {
  handleClose: () => void;  
}


export const AddPostForm = ({ handleClose }: Props) => {
  const { errors, handleSubmit, onSubmit, register } = usePostHoks(handleClose);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={css`
        display: flex;
        flex-direction: column;

        width: 300px;
      `}
    >
      <TextField
        label="Title"
        variant="outlined"
        {...register("title", {
          required: "Поле обязательно для ввода...",
          pattern: { value: /^[A-Za-z]+$/i, message: "Только ENGL буквы" },
          minLength: { value: 5, message: "Минимум 5 слов" },
        })}
      />
      <div
        css={css`
          padding: 15px 0;
          p {
            font-size: 13px;
            color: red;
            text-decoration: underline;
          }
        `}
      >
        {errors?.title && <p>{errors?.title.message || "error!!!"}</p>}
      </div>
      <TextField
        label="Description"
        variant="outlined"
       {...register("body", {    
          required: "Поле обязательно для ввода...",
          minLength: { value: 7, message: "Минимум 7 букв" },
          pattern: { value: /^[A-Za-z]+$/i, message: "Только ENGL буквы" },
        })}
      />
      <div
        css={css`
          padding: 15px 0;
          p {
            font-size: 13px;
            color: red;
            text-decoration: underline;
          }
        `}
      >
        {errors?.body && <p>{errors?.body.message || "error!!!"}</p>}
      </div>

      <TextField
        label="userId"
        variant="outlined"
        {...register("userId", {
          required: "Поле обязательно для ввода...",
          pattern: {
            value: /^[0-9]$/,
            message: "Ввeдите только цыфры от 0 до 9",
          },
        })}
      />
      <div
        css={css`
          padding: 15px 0;
          p {
            font-size: 13px;
            color: red;
            text-decoration: underline;
          }
        `}
      >
        {errors?.userId && <p>{errors?.userId.message || "error!!!"}</p>}
      </div>
      <Button autoFocus type="submit" variant="contained">
        Add post
      </Button>
    </form>
  );
};
