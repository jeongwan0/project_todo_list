import React from "react";

export const dDayCalc = (today, dday) => {
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

  const gap = ddayDate.getTime() - todayDate.getTime();
  return Math.floor(gap / (1000 * 60 * 60 * 24));
};
