import { todosDummy } from "../data/todosDummy"

export const monthTodo = (currentYear, currentMonth, userId) => {
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
}

export const dayTodo = (selectedDate, userId) => {
  if (!userId) return [];
  const dayTodos = (todosDummy[userId] ?? {})[selectedDate] ?? [];
  return dayTodos;
}

export const addTodo = (dateKey, userId, text, isItDone) => {
  if (!userId) return;

  if (!todosDummy[userId][dateKey]) {
    todosDummy[userId][dateKey] = [];
  }

  const newTodo = {
    id: `${userId}-${dateKey}-${Date.now()}`,
    text,
    done: isItDone,
  };

  todosDummy[userId][dateKey].push(newTodo);

  console.log(todosDummy[userId][dateKey])

  return;
}

export const modifyTodo = (dateKey, userId, index, text, isItDone) => {
  if (!userId) return [];

  const todos = todosDummy[userId]?.[dateKey] ?? [];

  const newTodos = todos.map((todo, i) =>
    i === index
      ? {
          ...todo,
          text,
          done: isItDone,
        }
      : todo
  );

  todosDummy[userId][dateKey] = newTodos;

  console.log(todosDummy[userId][dateKey]);

  return newTodos;
}

export const deleteTodo = (dateKey, userId, index) => {
  if (!userId) return;

  const todos = todosDummy[userId][dateKey]
  const newTodos = todos.filter((_, i) => i !== index);

  todosDummy[userId][dateKey] =  newTodos

  console.log(todosDummy[userId][dateKey])

  return;
}

export const toggleTodoDone = (dateKey, userId, index) => {
  if (!userId) return;

  const todos = todosDummy[userId]?.[dateKey];
  if (!todos || !todos[index]) return;

  todosDummy[userId][dateKey][index].done = !todosDummy[userId][dateKey][index].done;
}