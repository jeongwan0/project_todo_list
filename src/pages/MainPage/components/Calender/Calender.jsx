// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useMemo } from "react";

export default function Calendar({days, setIsModalOpen, setSelectedDay, monthTodos, currentYear, currentMonth}) {
    const weeksLength = days.length / 7;

    const todosByDate = useMemo(() => {
      const map = {};
      (monthTodos ?? []).forEach(({ dateKey, todos }) => {
        map[dateKey] = todos ?? [];
      });
      return map;
    }, [monthTodos]);

    const makeDateKey = (day) =>
      `${currentYear}${String(currentMonth).padStart(2, "0")}${String(day).padStart(
        2,
        "0"
      )}`;

    console.log(monthTodos)

    return Array.from({ length: 6 }, (_, w) => (
      <tr key={w} css={s.weeks(weeksLength)}>
        {Array.from({ length: 7 }, (_, d) => {
          const index = w * 7 + d;
          const dateKey = days[index] ? makeDateKey(days[index]) : null;
          const todos = dateKey ? (todosByDate[dateKey] ?? []) : [];

          return (
            <td
              key={index + 1}
              css={!days[index] ? [s.date, s.disabled] : [s.date, s.hover]}
              onClick={() => {
                if (days[index] != null) {
                  setIsModalOpen(true);
                  setSelectedDay(days[index]);
                }
              }}
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
                {todos.map((todo) => (
                <div css={s.ckbxTodo} key={todo.id}>
                  <input
                    type="checkbox"
                    id={todo.id}
                    css={s.ckbx}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor={todo.id}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {todo.text}
                  </label>
                </div>
              ))}
              </div>
            </td>
          );
        })}
      </tr>
    ));
  };