import { Navigate, Route, Routes } from "react-router-dom";

import React from 'react'
import MainPage from "../pages/MainPage/MainPage";
import HeaderPage from "../layouts/header/HeaderPage";

export default function AppRoutes() {
  console.log("AppRoutes.jsx 들어옴")
  return (
    <Routes>
        <Route path="/" element={<HeaderPage />}></Route>
    </Routes>
  )
}
