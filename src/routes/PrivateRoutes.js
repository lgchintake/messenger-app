import { Route, Routes } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import Home from "../views/Home";

const PrivateRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/*" element={<ErrorPage />} />
  </Routes>
);

export default PrivateRoutes;