/** @jsxImportSource @emotion/react */
import * as s from "../styles";
import { Outlet } from "react-router-dom";
import HeaderPage from "../header/HeaderPage";
import MyPage from "../../pages/MyPage/MyPage";
import { Global, css } from "@emotion/react";

export default function MyPageLayout() {
  console.log("MyPageLayout.jsx 들어옴");
  return (
    <div css={s.layout}>
      <HeaderPage />
      <main css={s.main}>
        <MyPage />
      </main>
    </div>
  );
}
