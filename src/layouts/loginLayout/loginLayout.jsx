/** @jsxImportSource @emotion/react */
import * as s from "../styles";
import { Outlet } from "react-router-dom";
import HeaderPage from "../header/HeaderPage";
import LoginPage from "../../pages/LoginPage/LoginPage"
import { Global, css } from "@emotion/react";

export default function MainLayout() {
  console.log("MainLayout.jsx 들어옴");
  return (
    <div css={s.layout}>
      <HeaderPage />
      <main css={s.main}>
        <LoginPage />
      </main>
    </div>
  );
}
