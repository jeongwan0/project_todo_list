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

  const handleLoginClick = () => {
    navigate("/login")
  }

  return (
    <header css={s.header}>
      <div css={s.innerDiv}>
        <div css={s.logoDiv}>
          <button css={s.btn} onClick={handleLogoClick}>
            <LuListTodo size="35" />
          </button>
        </div>
        <div css={s.profileDiv}>
          <button css={s.btn} onClick={handleLoginClick}>
            <AiOutlineUser size="35" />
          </button>
        </div>
      </div>
    </header>
  );
}
