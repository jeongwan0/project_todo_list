import { Navigate, Route, Routes } from "react-router-dom";

import React from "react";
import MainLayout from "../layouts/mainLayout/MainLayout";
import LoginLayout from "../layouts/loginLayout/loginLayout";
import MyPageLayout from "../layouts/mypageLayout/MyPageLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="/login" element={<LoginLayout />}></Route>
      <Route path="/myPage" element={<MyPageLayout />}></Route>
    </Routes>
  );
}
