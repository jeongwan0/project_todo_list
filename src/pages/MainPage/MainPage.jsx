import React, { useMemo, useEffect, useState } from "react";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    // const needWeeks = Math.max(4, Math.ceil(newDays.length / 7));
    // const totalCells = Math.min(6, needWeeks) * 7;

    while (newDays.length < 42) newDays.push(null);

    setDays(newDays);
  }, [currentYear, currentMonth]);

  const ckbxTodo = (content, id) => {
    return (
      <div css={s.ckbxTodo}>
        <input type="checkbox" id={id} css={s.ckbx} />
        <label htmlFor={id}>{content}</label>
      </div>
    );
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

  const calendar = () => {
    const weeksLength = days.length / 7;
    return Array.from({ length: 6 }, (_, w) => (
      <tr key={w} css={s.weeks(weeksLength)}>
        {Array.from({ length: 7 }, (_, d) => {
          const index = w * 7 + d;

          return (
            <td
              key={index + 1}
              css={!!days[index] ? [s.date, s.hover] : [s.date, s.disabled]}
              onClick={() => days[index] != null && setIsModalOpen(true)}
            >
              <div
                css={s.tdDate}
                style={{
                  visibility: days[index] != null ? "visible" : "hidden",
                }}
              >
                {days[index]}
              </div>

              <div
                css={s.tdCkbx}
                style={{
                  visibility: days[index] != null ? "visible" : "hidden",
                }}
              >
                <div css={s.ckbxTodo}>
                  <input
                    type="checkbox"
                    id={index}
                    css={s.ckbx}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label htmlFor={index} onClick={(e) => e.stopPropagation()}>
                    할일{days[index] ?? "\u00A0"}
                  </label>
                </div>
              </div>
            </td>
          );
        })}
      </tr>
    ));
  };

  const Modal = (isModalOpen) => {
    return (
      <>
        {isModalOpen && (
          <button
            css={s.cardBackground}
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <div css={s.cardDiv} onClick={(e) => e.stopPropagation()}>
              <div css={s.cardSearch}>
                <input
                  type="text"
                  css={s.cardInput}
                  placeholder="검색어를 입력하세요"
                />
                <button css={s.cardBtn}>
                  <AiOutlineSearch size={"24px"} />
                </button>
              </div>
              <div css={s.cardTodos}>
                <div css={s.ckbxDiv}>
                  <input
                    type="checkbox"
                    id="1"
                    css={s.ckbxInput}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="1"
                    css={s.ckbxLabel}
                    onClick={(e) => e.stopPropagation()}
                  >
                    할일1
                  </label>
                </div>
                <div css={s.ckbxDiv}>
                  <input
                    type="checkbox"
                    id="2"
                    css={s.ckbxInput}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="2"
                    css={s.ckbxLabel}
                    onClick={(e) => e.stopPropagation()}
                  >
                    할일2
                  </label>
                </div>
              </div>
              <div css={s.cardBtm}>
                <button
                  css={[s.cardCloseBtn, s.hover]}
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                >
                  닫기
                </button>
              </div>
            </div>
          </button>
        )}
      </>
    );
  };

  return (
    <>
      {Modal(isModalOpen)}
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
