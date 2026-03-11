import React, { useRef, useState } from "react";
import { useUserStore } from "../../stores/useUserStore";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { AiOutlineUser, AiOutlineUserDelete } from "react-icons/ai";
import { TbLockPassword, TbCalendarCog } from "react-icons/tb";
import { useDDayCalc } from "../../hooks/useDDayCalc";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();
  const user = useUserStore((s) => s.user);
  const users = useUserStore((s) => s.users);
  const updateUser = useUserStore((s) => s.updateUser);
  const logoutUser = useUserStore((s) => s.clearUser);
  const deleteUser = useUserStore((s) => s.deleteUser);
  const nickname = user.nickname;
  const id = user.id;
  const pw = user.pw;
  const ddayName = user.ddayname;
  const ddayDate = user.ddaydate;
  const ddayNum = user.ddaynum;
  const nicknameRef = useRef(null);
  const pwRef = useRef(null);
  const ddaynameRef = useRef(null);
  const ddaydateRef = useRef(null);

  const ddayDateToDate = (n) => {
    const string = String(n);
    const y = Number(string.slice(0, 4));
    const m = Number(string.slice(4, 6));
    const d = Number(string.slice(6, 8));
    return new Date(y, m - 1, d);
  };
  
  const ddayCalc = (ddayDate) => {
    return useDDayCalc(new Date(), ddayDateToDate(ddayDate));
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


  const handleChangeInput = (e) => {
    const { id, value } = e.currentTarget;
    setInputVal((prev) => ({ ...prev, [id]: value }));
  };

  const handleChangeBtn = (e) => {
    const id = e.currentTarget.id;

    if (changeBtnClick[id]) {
      if (id === "ddayname" || id === "ddaydate") {
        const newName = id === "ddayname" ? inputVal.ddayname : ddayName;
        const newDate =
          id === "ddaydate" ? String(inputVal.ddaydate) : ddayDate;
        updateUser({
          ddayname: newName,
          ddaydate: newDate,
          ddaynum: ddayCalc(newDate),
        });
      } else {
        updateUser({ [id]: inputVal[id] });
      }
    }

    setChangeBtnClick((prev) => {
      const next = { ...prev, [id]: !prev[id] };

      if (!prev[id]) {
        requestAnimationFrame(() => {
          focusInputById(id);
        });
      }

      return next;
    });
  }

  const handleLogoutBtn = () => {
    logoutUser();
    navigate("/")
    alert("로그아웃 되었습니다.")
  }

  const handleDeleteBtn = () => {
    const isReal = window.prompt("정말 탈퇴하시겠습니까?\n탈퇴하시려면 '회원 탈퇴'를 정확히 입력하세요.");

    if (isReal != '회원 탈퇴') {
      return;
    }

    deleteUser();
    logoutUser();
    navigate("/")
    alert("탈퇴 되었습니다.")
  }

  const plusMinus = (ddayNum) => {
    if (ddayNum > 0) {
      return `D-${ddayNum}`;
    } else if (ddayNum === 0) {
      return "D-DAY"
    } else {
      return `D+${-ddayNum}`;
    }
  }

  const focusInputById = (id) => {
    if (id === "nickname") nicknameRef.current?.focus();
    if (id === "pw") pwRef.current?.focus();
    if (id === "ddayname") ddaynameRef.current?.focus();
    if (id === "ddaydate") ddaydateRef.current?.focus();
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
                ref={nicknameRef}
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
                ref={pwRef}
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
                ref={ddaynameRef}
                value={inputVal.ddayname}
                onChange={handleChangeInput}
                id="ddayname"
                readOnly={!changeBtnClick.ddayname}
                css={s.changeInput}
                size={Math.max(String(inputVal.ddayname).length, 1)}
              />
              <input
                ref={ddaydateRef}
                type="text"
                value={inputVal.ddaydate}
                onChange={handleChangeInput}
                id="ddaydate"
                readOnly={!changeBtnClick.ddaydate}
                maxLength={8}
                css={s.changeInput}
                size={Math.max(String(inputVal.ddaydate).length, 1)}
              />
              : {plusMinus(ddayNum)}
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
            <div css={s.content2}>로그아웃 / 회원탈퇴</div>
            <div css={s.content3}>
              <button css={s.changeBtn} onClick={handleLogoutBtn}>로그아웃</button>
              <button css={[s.changeBtn, s.marginLeft]} onClick={handleDeleteBtn}>회원탈퇴</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
