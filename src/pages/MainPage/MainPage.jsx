import React, { useMemo, useEffect, useState } from "react";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { dDayCalc } from "../../hooks/dDayCalc";
import Calendar from "./components/Calender/Calender";
import CalenderModal from "./components/Modal/CalenderModal";
import { monthTodo } from "./hooks/useCalender";
import { useUserStore } from "../../stores/useUserStore";

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
  const dDay = useMemo(() => new Date(currentYear + 1, 0, 1), [currentYear]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const user = useUserStore((s) => s.user)
  const monthTodos = monthTodo(currentYear, currentMonth, user?.id);

  useEffect(() => {
    let newDays = [];
    for (let i = 0; i < firstYoil; i++) {
      newDays.push(null);
    }
    for (let day = 0; day < lastDate; day++) {
      newDays.push(day + 1);
    }

    while (newDays.length < 42) newDays.push(null);

    setDays(newDays);
  }, [currentYear, currentMonth]);

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
      <CalenderModal date={{currentYear, currentMonth, selectedDay}} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div css={s.innerDiv}>
        <div css={s.dateDiv}>
          <div css={s.leftDiv}></div>
          <div css={s.midDiv}>
            <button css={s.arrowBtn} onClick={backClickHandler}>
              <MdKeyboardArrowLeft />
            </button>
            <button css={s.midDate} onClick={thisMonthClickHandler}>
              {currentYear}.{currentMonth}
            </button>
            <button css={s.arrowBtn} onClick={nextClickHandler}>
              <MdKeyboardArrowRight />
            </button>
          </div>
          <div css={s.rightDiv}>신년 D-{dDayCalc(today, dDay)}</div>
        </div>
        <div css={s.calendarDiv}>
          <table css={s.calendar}>
            <thead>
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
            <tbody css={s.tbody}>
              <Calendar days={days} setIsModalOpen={setIsModalOpen} setSelectedDay={setSelectedDay} monthTodos={monthTodos} currentYear={currentYear} currentMonth={currentMonth} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
