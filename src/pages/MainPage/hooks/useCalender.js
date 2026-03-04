import { todosDummy } from "../../../data/todosDummy"

export const monthTodo = (currentYear, currentMonth, userId) => {
  // currentMonth로 해당 월의 todo들 return
  if (!userId) return [];
  const userTodos = todosDummy[userId] ?? {};
  const ym = `${currentYear}${String(currentMonth).padStart(2, "0")}`;
  const monthKeys = Object.keys(userTodos).filter((dateKey) =>
    dateKey.startsWith(ym)
  );
  
  monthKeys.sort();

  const monthTodos = monthKeys.map((dateKey) => ({
    dateKey,
    todos: userTodos[dateKey],
  }))
  
  return monthTodos;
} // 월 선택했을때 받아올 데이터

export const dayTodo = (selectedDay) => {
  // selectedDay로 해당 일의 todo를 return
  return []
}

