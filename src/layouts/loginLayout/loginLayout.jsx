/** @jsxImportSource @emotion/react */
import * as s from "../styles";
import { Outlet } from "react-router-dom";
import HeaderPage from "../header/HeaderPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { Global } from "@emotion/react";

export default function MainLayout() {
  return (
    <div css={s.layout}>
      <HeaderPage />
      <main css={s.main}>
        <LoginPage />
      </main>
    </div>
  );
}
