import React from "react";
// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { css } from "@emotion/react";

export default function MainPage() {
  console.log("MainPage.jsx 들어옴");
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();
  const todayYoil = today.getDay();
  const lastDate = new Date(todayYear, todayMonth, 0).getDate();
  const firstYoil = (today, yoil) => {
    let firstYoil = 0;

    let remainYoil = today % 7;
    let calc = yoil + ((8 - remainYoil) % 7);
    firstYoil = calc > 6 ? calc - 7 : calc;
    return firstYoil;
  };

  console.log(firstYoil(todayDay, todayYoil));

  const calendar = () => {
    return Array.from({ length: 5 }, (_, w) => (
      <tr key={w} css={s.week}>
        {Array.from({ length: 7 }, (_, d) => (
          <td key={d} css={s.date}>
            {w * 7 + d + 1}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <>
      <div css={s.innerDiv}>
        <div css={s.dateDiv}>
          <div css={s.sideDiv}></div>
          <div css={s.midDiv}>
            {todayYear}.{todayMonth}
          </div>
          <div css={s.sideDiv}>중간고사 D-NN</div>
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
