// /** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useMemo } from "react";
import { toggleTodoDone } from "../../hooks/useCalender";

export default function Calendar({days, setIsModalOpen, setSelectedDay, monthTodos, currentYear, currentMonth, user, setTick}) {
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
                {todos.map((todo, todoIndex) => (
                <div css={s.ckbxTodo} key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    id={`todo-${todo.id}`}
                    css={s.ckbx}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleTodoDone(dateKey, user?.id, todoIndex);
                      setTick((prev) => prev + 1);
                    }}
                  />
                  <label
                    htmlFor={`todo-${todo.id}`}
                    css={s.label}
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