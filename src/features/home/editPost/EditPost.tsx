/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { EditPostInterface } from "./interface";
import { useEditPost } from "./hooks/useEditPost";
import Loading from "../../loading/Loadong";
import { Box, FormEdit } from "./components";

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
    <Box>
      <FormEdit></FormEdit>
    </Box>
  );
};
