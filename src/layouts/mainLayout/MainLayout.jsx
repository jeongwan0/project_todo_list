/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { Outlet } from "react-router-dom";
import HeaderPage from "../header/HeaderPage";
import MainPage from "../../pages/MainPage/MainPage";

export default function MainLayout() {
  return (
    <div css={s.layout}>
      <HeaderPage />
      <main css={s.main}>
        <MainPage />
      </main>
    </div>
  )
}
