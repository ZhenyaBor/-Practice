/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";

type Inputs = {
  title: string;
  description: string;
};

export const AddPostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = (dataForm) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataForm),
    })
      .then((res) => res.json())
      .then(console.log);
    reset();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          pattern: { value: /^[A-Za-z]+$/i, message: "Только буквы" },
          minLength: { value: 5, message: "Минимум 5 слов" },
        })}
      />
      <div
        css={css`
          padding: 10px 0;
          heigth: 40px;
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
        {...register("description", {
          required: "Поле обязательно для ввода...",
          pattern: { value: /^[A-Za-z]+$/i, message: "Только буквы" },
          minLength: { value: 7, message: "Минимум 7 слов" },
        })}
      />
      <div
        css={css`
          padding: 10px 0;
          height: 40px;
          p {
            font-size: 13px;
            color: red;
            text-decoration: underline;
          }
        `}
      >
        {errors?.description && (
          <p>{errors?.description.message || "error!!!"}</p>
        )}
      </div>
      <Button autoFocus type="submit" variant="contained">
        Add post
      </Button>
    </form>
  );
};
