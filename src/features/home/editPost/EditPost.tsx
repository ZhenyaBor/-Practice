/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { EditPostInterface } from "./interface";
import { useEditPost } from "./hooks/useEditPost";
import Loading from "../../loading/Loadong";

interface Props {
  editpost: EditPostInterface;
  loader: boolean;
}

export const EditPost = () => {
  const { editpost, loader }: Props = useEditPost();
  console.log(editpost);

  if (loader) {
    return <Loading />;
  }
  return (
    <div
      css={css`
        width: 600px;
        margin: 100px auto;
        background-color: white;
        color: black;
      `}
    >
      <p>dasdsadasdddddddddddddddddddddd</p>
    </div>
  );
};
