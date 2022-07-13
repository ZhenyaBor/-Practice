import { EditPostInterface } from "./interface";
import { useEditPost } from "./hooks/useEditPost";
import Loading from "../loading/Loadong";
import { Box, FormEdit } from "./components";

interface Props {
  editpost: EditPostInterface;
  loader: boolean;
  editpostId: any;
}

export const EditPost = () => {
  const { editpostId, loader }: Props = useEditPost();

  if (loader) {
    return <Loading />;
  }
  return (
    <Box>
      <FormEdit></FormEdit>
    </Box>
  );
};
