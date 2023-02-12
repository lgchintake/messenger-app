import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/index.css";
import {Dashboard} from "./views/Dashboard";
import Login from "./views/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
