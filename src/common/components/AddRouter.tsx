import { Route, Routes } from "react-router-dom";
import { HomeFeature, MorePost } from "../../features";

export const AddRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/post" element={<MorePost />} />
  </Routes>
);
