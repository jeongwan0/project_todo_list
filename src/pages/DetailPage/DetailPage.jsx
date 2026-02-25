import React, { useState } from "react";
import * as s from "./styles";
// /** @jsxImportSource @emotion/react */
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

export default function DetailPage() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const currentDay = today.getDate();
  const [dDay, setDDay] = useState(new Date(currentYear + 1, 0, 1));
  const dDayCalc = (today, dday) => {
      const todayDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
      );

      const ddayDate = new Date(
        dday.getFullYear(),
        dday.getMonth(),
        dday.getDate(),
      );

      let gap = ddayDate.getTime() - todayDate.getTime();
      let result = Math.floor(gap / (1000 * 60 * 60 * 24));
      return result;
    };

  const Card = () => {
    return (
      <>
        <div css={s.cardDiv}>
          <div css={s.cardSearch}>
            <input type="text" css={s.cardInput} placeholder="검색어를 입력하세요" />
            <button css={[s.cardBtn, s.btn]}><AiOutlineSearch size={"24px"}/></button>
          </div>
          <div css={s.cardTodos}>
            <div css={s.ckbxDiv}>
              <input type="checkbox" id="1" css={s.ckbxInput}/>
              <label htmlFor="1" css={s.ckbxLabel}>할일1</label>
            </div>
          </div>
        </div>
      </>
    )
  };

  return (
      <>
        <div css={s.innerDiv}>
          <div css={s.dateDiv}>
            <div css={s.leftDiv}>
              <button css={s.btn}>
                이번달로
              </button>
            </div>
            <div css={s.midDiv}>
              <button css={s.arrowBtn}>
                <MdKeyboardArrowLeft />
              </button>
              {currentYear}.{currentMonth}.{currentDay}
              <button css={s.arrowBtn}>
                <MdKeyboardArrowRight />
              </button>
            </div>
            <div css={s.rightDiv}>신년 D-{dDayCalc(today, dDay)}</div>
          </div>
          <div css={s.todoDiv}>
            <Card />
          </div>
        </div>
      </>
    );
}
