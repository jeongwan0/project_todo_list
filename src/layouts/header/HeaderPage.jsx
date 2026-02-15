import React from "react";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { AiOutlineUser } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderPage() {
  console.log("HeaderPage.jsx 들어옴");
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header css={s.header}>
      <div css={s.logoDiv}>
        <button css={s.btn} onClick={handleLogoClick}>
          <LuListTodo size="35" />
        </button>
      </div>
      <div css={s.profileDiv}>
        <button css={s.btn}>
          <AiOutlineUser size="35" />
        </button>
      </div>
    </header>
  );
}
