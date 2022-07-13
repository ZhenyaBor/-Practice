import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  title: string;
  body: string;
};

export const usePostHoks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = (dataForm) => {
    const { title, body } = dataForm;

    fetch("https://dummyjson.com/posts/1", {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
    reset();
    alert("вы успешно отредактировали Пост!!!");
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
