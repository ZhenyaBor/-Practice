import { Route, Routes } from "react-router-dom";
import { HomeFeature, MorePost } from "../../features";
import { EditPost } from "../../features/home/editPost/EditPost";

export const AddRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/post/:postId" element={<MorePost />} />
    <Route path="/editPost/:editpostId" element={<EditPost />} />
  </Routes>
);
