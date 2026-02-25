/** @jsxImportSource @emotion/react */
import * as s from "../styles";
import { Outlet } from "react-router-dom";
import HeaderPage from "../header/HeaderPage";
import { Global, css } from "@emotion/react";
import DetailPage from "../../pages/DetailPage/DetailPage";
import ModalStore from "../../stores/modalStore";

export default function DetailLayout() {
  console.log("DetailLayout.jsx 들어옴");
  return (
    <div css={s.layout}>
      <HeaderPage />
      <main css={s.main}>
        <ModalStore />
      </main>
    </div>
  );
}
