import React, { useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { dDayCalc } from "../../hooks/dDayCalc";

export default function LoginPage() {
  const [idInputVal, setIdInputVal] = useState("");
  const [pwInputVal, setPwInputVal] = useState("");
  const [pwToggle, setPwToggle] = useState(false);
  const navigate = useNavigate();
  const setUser = useUserStore((s) => s.setUser);
  const addUser = useUserStore((s) => s.addUser);
  const users = useUserStore((s) => s.users);

  const signinClickHandler = () => {
    const user = users.find((u) => u.id === idInputVal && u.pw === pwInputVal);

    if (!user) {
      alert("잘못된 ID/PW 입니다.");
      return;
    }

    setIdInputVal("");
    setPwInputVal("");
    alert(`${user.nickname}님, 반갑습니다.`);
    setUser(user);
    navigate("/");
  };

  const signupClickHandler = () => {
    console.log(users)
    const exist = users.find((u) => u.id === idInputVal);
    const pwRegEx = /^(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;
    const nextIndex = users.length === 0 ? 1 : Math.max(...users.map((u) => u.index ?? 0)) + 1;
    const today = new Date();
    const currentYear = today.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1);
    const ddayYear = newYear.getFullYear().toString();
    const ddayDate = ddayYear + "01" + "01";
    const ddayNum = dDayCalc(today, newYear);

    if (idInputVal.length < 4 || idInputVal.length > 20) {
      alert("ID는 4자 이상 20자 이하여야 합니다.")
      return;
    }

    if (exist) {
      alert("이미 사용중인 ID 입니다");
      return;
    }

    if (!pwRegEx.test(pwInputVal)) {
      alert("비밀번호는 8자 이상이고 특수문자를 포함하여야 합니다.");
      return;
    }

    addUser({
      index: nextIndex,
      nickname: idInputVal,
      id: idInputVal,
      pw: pwInputVal,
      ddayname: "신년",
      ddaydate: ddayDate,
      ddaynum: ddayNum,
    })


    setIdInputVal("");
    setPwInputVal("");
    alert("회원가입이 완료되었습니다!");
    console.log(users)
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
              placeholder="아이디를 입력하세요 (4자 이상, 20자 이하)"
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
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                setPwToggle(!pwToggle);
              }}
            >
              {pwToggle ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </div>
        <div css={s.btnDiv}>
          <button css={[s.logsigninBtn, s.hover]} onClick={signinClickHandler}>
            로그인
          </button>
          <button css={[s.logsigninBtn, s.hover]} onClick={signupClickHandler}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}
