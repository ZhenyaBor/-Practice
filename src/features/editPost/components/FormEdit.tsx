/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { usePostHoks } from "../hooks/usePostHoks";

export const FormEdit = () => {
  const { errors, handleSubmit, onSubmit, register } = usePostHoks();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={css`
        display: flex;
        flex-direction: column;

        width: 300px;
      `}
    >
      <h4
        css={css`
          margin-bottom: 20px;
          font-size: 20px;
        `}
      >
        Редактировать пост
      </h4>
      <TextField
        //error={errors?.title}
        label="Title"
        variant="outlined"
        {...register("title", {
          required: "Поле обязательно для ввода...",
          pattern: { value: /^[A-Za-z]+$/i, message: "Только ENGL буквы" },
          minLength: { value: 5, message: "Минимум 5 букв" },
        })}
      />
      <div
        css={css`
          height: 40px;
          padding: 5px 0;
          p {
            font-size: 13px;
            color: red;
            text-decoration: underline;
          }
        `}
      >
        {errors?.title && <p>{errors?.title.message || "error!!!"}</p>}
      </div>

      <Button autoFocus type="submit" variant="contained">
        Add post
      </Button>
    </form>
  );
};
