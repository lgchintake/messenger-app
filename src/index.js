import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./assets/index.css";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Login from "./views/Login";

let isLoggedIn = false;
const loggedInFlag = localStorage.getItem("isLoggedIn");

if (loggedInFlag === "true") {
  isLoggedIn = true;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="*" element={<PrivateRoutes />} />
            <Route index element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<PublicRoutes />} />
            <Route index element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
