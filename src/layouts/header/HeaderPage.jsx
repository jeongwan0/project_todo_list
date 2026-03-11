import React from "react";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useUserStore } from "../../stores/useUserStore";
import { AiOutlineUser } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderPage() {
  const navigate = useNavigate();
  const user = useUserStore((s) => s.user);
  const isLogin = !!user;

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    if (isLogin) {
      navigate("/myPage");
      return;
    }
    navigate("/login");
    return;
  };

  return (
    <header css={s.header}>
      <div css={s.innerDiv}>
        <div css={s.logoDiv}>
          <button css={s.btn} onClick={handleLogoClick}>
            <LuListTodo size="40" />
          </button>
        </div>
        <div css={s.profileDiv}>
          <button css={[s.btn, s.radius50]} onClick={handleLoginClick}>
            <AiOutlineUser size="40" />
          </button>
        </div>
      </div>
    </header>
  );
}
