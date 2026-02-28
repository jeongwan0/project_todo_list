import React from "react";
import { useUserStore } from "../../stores/useUserStore";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";

export default function myPage() {
  const user = useUserStore((u) => u.user);
  const isLogin = !!user;

  return (
    <>
      <div>
        <div>
          <img src="" alt="프사" />
          <p>닉네임</p>
        </div>
        <div>
          닉네임변경 아이디출력 비밀번호변경 디데이변경 프사변경 회원탈퇴
        </div>
      </div>
    </>
  );
}
