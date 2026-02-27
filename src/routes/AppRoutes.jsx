import { Navigate, Route, Routes } from "react-router-dom";

import React from "react";
import MainLayout from "../layouts/mainLayout/MainLayout";
import LoginLayout from "../layouts/loginLayout/loginLayout"

export default function AppRoutes() {
  console.log("AppRoutes.jsx 들어옴");
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="/login" element={<LoginLayout />}></Route>
    </Routes>
  );
}
