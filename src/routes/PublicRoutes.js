import { Route, Routes } from "react-router-dom";
import PublicErrorPage from "../views/PublicErrorPage";
import ForgotPassword from "../views/ForgotPassword";
import Login from "../views/Login";

const PublicRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/*" element={<PublicErrorPage />} />
  </Routes>
);

export default PublicRoutes;
