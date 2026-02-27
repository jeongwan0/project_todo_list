import React, { useState } from 'react'
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [idInputVal, setIdInputVal] = useState("")
  const [pwInputVal, setPwInputVal] = useState("")
  const navigate = useNavigate();
  let users = [
  { userId: 1, nickname: "민지", loginId: "minji_01" },
  { userId: 2, nickname: "서준", loginId: "seojun_02" },
  { userId: 3, nickname: "지우", loginId: "jiwoo_03" },
  { userId: 4, nickname: "하린", loginId: "harin_04" },
  { userId: 5, nickname: "도윤", loginId: "doyoon_05" },
];

  const loginClickHandler = () => {
    if (!(idInputVal in users)) {
      alert("존재하지 않는 ID입니다.")
      return;
    }

    navigate("/")
  }

  const signinClickHandler = () => {
    navigate("/")
  }

  const idInputChageHandler = (e) => {
    const value = e.target.value;
    setIdInputVal(value);
  }

  const pwInputChageHandler = (e) => {
    const value = e.target.value;
    setPwInputVal(value);
  }

  return (
    <>
      <div css={s.mainDiv}>
        <div css={s.titleDiv}>
          로그인 / 회원가입
        </div>
        <div css={s.inputDiv}>
          <div css={s.idpwDiv}>
            <label css={s.idpwText} htmlFor="id">ID:</label>
            <input css={s.idpwInput} id="id" type="text" value={idInputVal} onChange={idInputChageHandler} placeholder="아이디를 입력하세요"/>
          </div>
          <div css={s.idpwDiv}>
            <label css={s.idpwText} htmlFor="pw">PW:</label>
            <input css={s.idpwInput} id="pw" type="password" value={pwInputVal} onChange={pwInputChageHandler}placeholder="비밀번호를 입력하세요 (8자 이상, 특수문자 포함)"/>
          </div>
        </div>
        <div css={s.btnDiv}>
          <button css={[s.logsigninBtn, s.hover]} onClick={loginClickHandler}>로그인</button>
          <button css={[s.logsigninBtn, s.hover]} onClick={signinClickHandler}>회원가입</button>
        </div>
      </div>
    </>
  )
}
