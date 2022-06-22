import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    title: string;
    body: string;
    userId: number;
  };

export const usePostHoks = ( handleClose: () => void) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<Inputs>({ mode: "onBlur" });
    
      const onSubmit: SubmitHandler<Inputs> = (dataForm) => {
        const { title, body, userId } = dataForm;
    
        fetch("https://dummyjson.com/posts/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            body,
            userId,
          }),
        })
          .then((res) => res.json())
          .then((data)=>{
      
          });
          handleClose()
        reset();
      };

      return{
        register,
        handleSubmit,
         errors ,
        onSubmit
      }
}
