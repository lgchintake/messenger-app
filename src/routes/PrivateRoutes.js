import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../views/Dashboard";
import ErrorPage from "../views/ErrorPage";

const PrivateRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/*" element={<ErrorPage />} />
  </Routes>
);

export default PrivateRoutes;