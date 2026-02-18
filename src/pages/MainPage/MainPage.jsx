import React, { useMemo, useEffect, useState } from "react";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { css } from "@emotion/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MainPage() {
  console.log("MainPage.jsx 들어옴");
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const lastDate = useMemo(() => {
    return new Date(currentYear, currentMonth, 0).getDate();
  }, [currentYear, currentMonth]);
  const firstYoil = useMemo(() => {
    return new Date(currentYear, currentMonth - 1, 1).getDay();
  }, [currentYear, currentMonth]);
  const [days, setDays] = useState([]);
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

  useEffect(() => {
    let newDays = [];
    for (let i = 0; i < firstYoil; i++) {
      newDays.push(null);
    }
    for (let day = 0; day < lastDate; day++) {
      newDays.push(day + 1);
    }
    while (newDays.length % 7 !== 0 && newDays.length < 35) {
      newDays.push(null);
    }
    setDays(newDays);
  }, [currentYear, currentMonth]);

  const calendar = () => {
    return Array.from({ length: 5 }, (_, w) => (
      <tr key={w} css={s.week}>
        {Array.from({ length: 7 }, (_, d) => (
          <td key={w * 7 + d + 1} css={[s.date, s.hover]}>
            <div css={s.tdDate}>{days[w * 7 + d] ?? "\u00A0"}</div>
            {days[w * 7 + d] !== null && (
              <div css={s.tdCkbx}>
                <div css={s.ckbxTodo}>
                  <input type="checkbox" id="1" css={s.ckbx} />
                  <label htmlFor="1">할일1</label>
                </div>
                <div css={s.ckbxTodo}>
                  <input type="checkbox" id="2" css={s.ckbx} />
                  <label htmlFor="2">할일2</label>
                </div>
              </div>
            )}
          </td>
        ))}
      </tr>
    ));
  };

  const backClickHandler = () => {
    if (currentMonth - 1 == 0) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextClickHandler = () => {
    if (currentMonth + 1 == 13) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const thisMonthClickHandler = () => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth() + 1);
  };

  return (
    <>
      <div css={s.innerDiv}>
        <div css={s.dateDiv}>
          <div css={s.leftDiv}>
            <button css={s.btn} onClick={thisMonthClickHandler}>
              이번달로
            </button>
          </div>
          <div css={s.midDiv}>
            <button css={s.arrowBtn} onClick={backClickHandler}>
              <MdKeyboardArrowLeft />
            </button>
            {currentYear}.{currentMonth}
            <button css={s.arrowBtn} onClick={nextClickHandler}>
              <MdKeyboardArrowRight />
            </button>
          </div>
          <div css={s.rightDiv}>신년 D-{dDayCalc(today, dDay)}</div>
        </div>
        <div css={s.calendarDiv}>
          <table css={s.calendar}>
            <thead css={s.thead}>
              <tr css={s.week}>
                {weeks.map((week) => {
                  return (
                    <td key={week} css={s.date}>
                      {week}
                    </td>
                  );
                })}
              </tr>
            </thead>
            <tbody css={s.tbody}>{calendar()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
