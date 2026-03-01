import React, { useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { AiOutlineUser, AiOutlineUserDelete } from "react-icons/ai";
import { TbLockPassword, TbCalendarCog } from "react-icons/tb";
import { dDayCalc } from "../../hooks/dDayCalc";

export default function myPage() {
  const user = useUserStore((s) => s.user?.user);
  const updateUser = useUserStore((s) => s.updateUser);
  const [isLogin, setIsLogin] = useState(!!user);
  const nickname = user.nickname;
  const id = user.id;
  const pw = user.pw;
  const ddayName = user.dday[0];
  const ddayDate = user.dday[1];
  const ddayNum = user.dday[2];

  const ddayCalc = (ddayDate) => {
    return dDayCalc(new Date(), ddayToDate(ddayDate));
  };

  const [inputVal, setInputVal] = useState({
    nickname: nickname,
    pw: pw,
    ddayname: ddayName,
    ddaydate: ddayDate,
  });
  const [changeBtnClick, setChangeBtnClick] = useState({
    nickname: false,
    pw: false,
    ddayname: false,
    ddaydate: false,
  });
  const ddayToDate = (n) => {
    const string = String(n);
    const y = Number(string.slice(0, 4));
    const m = Number(string.slice(4, 6));
    const d = Number(string.slice(6, 8));
    return new Date(y, m - 1, d);
  };

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setInputVal((prev) => ({ ...prev, [id]: value }));
  };

  const handleChangeBtn = (e) => {
    const id = e.target.id;

    // if (changeBtnClick[id]) {
    //   if (id === "ddayname" || id === "ddaydate") {
    //     const newName = id === "ddayname" ? inputVal.ddayname : ddayName;
    //     const newDate =
    //       id === "ddaydate" ? Number(inputVal.ddaydate) : ddayDate;
    //     updateUser({
    //       dday: [newName, newDate, ddayCalc(new Date(), ddayToDate(newDate))],
    //     });
    //   } else {
    //     updateUser({ [id]: inputVal[id] });
    //   }
    // }

    setChangeBtnClick((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
          <div css={s.textDiv}>
            <p css={s.nickNameText}>{nickname}</p>
            <p css={s.idText}>{id}</p>
          </div>
        </div>
        <div css={s.changeDiv}>
          <div css={s.innerDiv}>
            <div css={s.content1}>
              <AiOutlineUser />
            </div>
            <div css={s.content2}>
              <input
                type="text"
                value={inputVal.nickname}
                onChange={handleChangeInput}
                id="nickname"
                readOnly={!changeBtnClick.nickname}
                css={s.changeInput}
                size={Math.max(String(inputVal.nickname).length, 1)}
              />
            </div>
            <div css={s.content3}>
              <button css={s.changeBtn} id="nickname" onClick={handleChangeBtn}>
                {!changeBtnClick.nickname ? "변경" : "완료"}
              </button>
            </div>
          </div>
          <div css={s.innerDiv}>
            <div css={s.content1}>
              <TbLockPassword />
            </div>
            <div css={s.content2}>
              <input
                type="text"
                value={inputVal.pw}
                onChange={handleChangeInput}
                id="pw"
                readOnly={!changeBtnClick.pw}
                css={s.changeInput}
                size={Math.max(String(inputVal.pw).length, 1)}
              />
            </div>
            <div css={s.content3}>
              <button css={s.changeBtn} id="pw" onClick={handleChangeBtn}>
                {!changeBtnClick.pw ? "변경" : "완료"}
              </button>
            </div>
          </div>
          <div css={s.innerDdayDiv}>
            <div css={s.content1}>
              <TbCalendarCog />
            </div>
            <div css={s.content2}>
              <input
                type="text"
                value={inputVal.ddayname}
                onChange={handleChangeInput}
                id="ddayname"
                readOnly={!changeBtnClick.ddayname}
                css={s.changeInput}
                size={Math.max(String(inputVal.ddayname).length, 1)}
              />
              <input
                type="text"
                value={inputVal.ddaydate}
                onChange={handleChangeInput}
                id="ddaydate"
                readOnly={!changeBtnClick.ddaydate}
                css={s.changeInput}
                size={Math.max(String(inputVal.ddaydate).length, 1)}
              />
              : D-{ddayNum}
            </div>
            <div css={s.content3}>
              <button css={s.changeBtn} id="ddayname" onClick={handleChangeBtn}>
                {!changeBtnClick.ddayname ? "일정명 변경" : "변경 완료"}
              </button>
              <button
                css={[s.changeBtn, s.marginLeft]}
                id="ddaydate"
                onClick={handleChangeBtn}
              >
                {!changeBtnClick.ddaydate ? "날짜 변경" : "변경 완료"}
              </button>
            </div>
          </div>
          <div css={[s.innerDiv, s.deleteUserDiv]}>
            <div css={s.content1}>
              <AiOutlineUserDelete />
            </div>
            <div css={s.content2}>회원탈퇴</div>
            <div css={s.content3}>
              <button css={s.changeBtn}>탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
