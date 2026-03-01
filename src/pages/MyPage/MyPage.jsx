import React, { useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { AiOutlineUser } from "react-icons/ai";
import { dDayCalc } from "../../hooks/dDayCalc";

export default function myPage() {
  const user = useUserStore((s) => s.user?.user);
  const [isLogin, setIsLogin] = useState(!!user);
  const nickname = user.nickname;
  const id = user.id;
  const pw = user.pw;
  const ddayName = user.dday[0];
  const ddayDate = user.dday[1];
  const ddayToDate = (n) => {
    const string = String(n);
    const y = Number(string.slice(0, 4));
    const m = Number(string.slice(4, 6));
    const d = Number(string.slice(6, 8));
    return new Date(y, m - 1, d);
  };
  const ddayNum = dDayCalc(new Date(), ddayToDate(ddayDate));

  return (
    <>
      <div css={s.mainDiv}>
        <div css={s.profileDiv}>
          <button css={s.imgBtn}>
            <img
              src="src\assets\asset\profileImg.jpg"
              css={s.profileImg}
              alt="프사"
            />
          </button>
          <p css={s.nickNameText}>{nickname}</p>
        </div>
        <div css={s.changeDiv}>
          <div css={s.innerDiv}>
            <div css={s.content1}>닉네임:</div>
            <div css={s.content2}>{nickname}</div>
            <div css={s.content3}>
              <button css={s.changeBtn}>변경</button>
            </div>
          </div>
          <div css={s.innerDiv}>
            <div css={s.content1}>아이디:</div>
            <div css={s.content2}>{id}</div>
            <div css={s.content3}></div>
          </div>
          <div css={s.innerDiv}>
            <div css={s.content1}>비밀번호:</div>
            <div css={s.content2}>{pw}</div>
            <div css={s.content3}>
              <button css={s.changeBtn}>변경</button>
            </div>
          </div>
          <div css={s.innerDiv}>
            <div css={s.content1}>디데이:</div>
            <div css={s.content2}>
              {ddayName} D-{ddayNum}
            </div>
            <div css={s.content3}>
              <button css={s.changeBtn}>변경</button>
            </div>
          </div>
          <div css={[s.innerDiv, s.deleteUserDiv]}>
            <div css={s.content1}></div>
            <div css={s.content2}></div>
            <div css={s.content3}>
              <button css={s.deleteUserBtn}>회원탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
