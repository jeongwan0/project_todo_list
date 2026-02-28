import React, { useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const [idInputVal, setIdInputVal] = useState("");
  const [pwInputVal, setPwInputVal] = useState("");
  const [pwToggle, setPwToggle] = useState(false);
  const navigate = useNavigate();
  const setUser = useUserStore((s) => s.setUser);
  const [users, setUsers] = useState([
    { index: 1, nickname: "민지", id: "minji_01", pw: "Minji$2026" },
    { index: 2, nickname: "서준", id: "seojun_02", pw: "Seojun!88" },
    { index: 3, nickname: "지우", id: "jiwoo_03", pw: "Jiwoo@741" },
    { index: 4, nickname: "하린", id: "harin_04", pw: "Harin$3x9" },
    { index: 5, nickname: "도윤", id: "doyoon_05", pw: "Doyoon%17" },
  ]);

  const loginClickHandler = () => {
    const user = users.find((u) => u.id === idInputVal && u.pw === pwInputVal);

    if (!user) {
      alert("잘못된 ID/PW 입니다.");
      return;
    }

    setIdInputVal("");
    setPwInputVal("");
    alert(`${user.nickname}님, 반갑습니다.`);
    setUser({ user });
    navigate("/");
  };

  const signinClickHandler = () => {
    const user = users.find((u) => u.id === idInputVal);
    const emailRegEx = /^([a-z0-9_\.-]+)@([\da-z-]+)\.([a-z\.]{2,6})$/;

    // { index: 6, nickname: "예준", id: "yejun_06", pw: "Yejun529" }

    if (!idInputVal) {
      alert("ID는 빈 값일 수 없습니다");
      return;
    }

    if (user) {
      alert("이미 사용중인 ID 입니다");
      return;
    }

    if (String(pwInputVal).length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다");
      return;
    }

    if (!emailRegEx.test(pwInputVal)) {
      alert("비밀번호는 특수문자를 포함하여야 합니다");
      return;
    }

    setUsers((prev) => [
      ...prev,
      {
        index: 7,
        nickname: { idInputVal },
        id: { idInputVal },
        pw: { pwInputVal },
      },
    ]);

    alert("회원가입이 완료되었습니다!");
  };

  const idInputChageHandler = (e) => {
    const value = e.target.value;
    setIdInputVal(value);
  };

  const pwInputChageHandler = (e) => {
    const value = e.target.value;
    setPwInputVal(value);
  };

  return (
    <>
      <div css={s.mainDiv}>
        <div css={s.titleDiv}>로그인 / 회원가입</div>
        <div css={s.inputDiv}>
          <div css={s.idpwDiv}>
            <label css={s.idpwText} htmlFor="id">
              ID:
            </label>
            <input
              css={s.idpwInput}
              id="id"
              type="text"
              value={idInputVal}
              onChange={idInputChageHandler}
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div css={s.idpwDiv}>
            <label css={s.idpwText} htmlFor="pw">
              PW:
            </label>
            <input
              css={s.idpwInput}
              id="pw"
              type={pwToggle ? "text" : "password"}
              value={pwInputVal}
              onChange={pwInputChageHandler}
              placeholder="비밀번호를 입력하세요 (8자 이상, 특수문자 포함)"
            />
            <button
              css={s.idpwBtn}
              onClick={() => {
                setPwToggle(!pwToggle);
              }}
            >
              {pwToggle ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </div>
        <div css={s.btnDiv}>
          <button css={[s.logsigninBtn, s.hover]} onClick={loginClickHandler}>
            로그인
          </button>
          <button css={[s.logsigninBtn, s.hover]} onClick={signinClickHandler}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}
