import React, { useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { loginRequest, signupRequest } from "../../apis/authApi";

export default function LoginPage() {
  const [idInputVal, setIdInputVal] = useState("");
  const [pwInputVal, setPwInputVal] = useState("");
  const [pwToggle, setPwToggle] = useState(false);
  const navigate = useNavigate();
  const setUser = useUserStore((s) => s.setUser);

  const signinClickHandler = async () => {
    if (!idInputVal.trim() || !pwInputVal.trim()) {
      alert("ID와 PW를 입력해 주세요.");
      return;
    }

    try {
      const loginUser = await loginRequest(idInputVal, pwInputVal);
      console.log("loginUser:", loginUser);

      const normalizedUser = {
        id: loginUser.userId,
        loginId: loginUser.loginId,
        nickname: loginUser.nickname,
        pw: loginUser.password,
        ddayname: loginUser.ddayname,
        ddaydate: loginUser.ddaydate,
        ddaynum: loginUser.ddaynum,
        message: loginUser.message,
      };

      setIdInputVal("");
      setPwInputVal("");
      setUser(normalizedUser);
      alert(`${normalizedUser.nickname}님, 반갑습니다.`);
      console.log("로그인 성공");
      navigate("/");
    } catch (error) {
      alert("잘못된 ID/PW 입니다.");
      console.error("로그인 실패", error);
    }
  };

  const signupClickHandler = async () => {
    const pwRegEx = /^(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

    if (idInputVal.length < 4 || idInputVal.length > 20) {
      alert("ID는 4자 이상 20자 이하여야 합니다.");
      return;
    }

    if (!pwRegEx.test(pwInputVal)) {
      alert("비밀번호는 8자 이상이고 특수문자를 포함하여야 합니다.");
      return;
    }

    try {
      await signupRequest({
        loginId: idInputVal,
        password: pwInputVal,
        nickname: idInputVal,
      });

      setIdInputVal("");
      setPwInputVal("");
      alert("회원가입이 완료되었습니다!");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
      console.error(error);
    }
  };

  const idInputChageHandler = (e) => {
    const value = e.target.value;

    const noKorean = value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");

    setIdInputVal(noKorean);
  };

  const pwInputChageHandler = (e) => {
    const value = e.target.value;

    const noKorean = value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");

    setPwInputVal(noKorean);
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
