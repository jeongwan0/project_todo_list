import {
  getTodosByDateRequest,
  addTodoRequest,
  modifyTodoRequest,
  deleteTodoRequest,
  toggleTodoDoneRequest,
} from "../apis/todoApi";

const normalizeTodo = (todo) => ({
  ...todo,
  id: todo.id ?? todo.todoId,
  done: todo.done ?? todo.isDone ?? false,
});

export const monthTodo = async (currentYear, currentMonth, userId) => {
  if (!userId) return [];

  const lastDate = new Date(currentYear, currentMonth, 0).getDate();

  const requests = Array.from({ length: lastDate }, async (_, i) => {
    const day = i + 1;
    const dateKey = `${currentYear}${String(currentMonth).padStart(2, "0")}${String(day).padStart(2, "0")}`;

    try {
      const result = await getTodosByDateRequest(userId, toApiDate(dateKey));

      return {
        dateKey,
        todos: Array.isArray(result?.todos)
          ? result.todos.map(normalizeTodo)
          : [],
      };
    } catch (error) {
      console.error(`${dateKey} 조회 실패`, error);
      return { dateKey, todos: [] };
    }
  });
  
  return await Promise.all(requests);
};

export const dayTodo = async (selectedDate, userId) => {
  const result = await getTodosByDateRequest(userId, toApiDate(selectedDate));

  return Array.isArray(result?.todos)
    ? result.todos.map(normalizeTodo)
    : [];
};

export const addTodo = async (selectedDate, userId, content, done = false) => {
  if (!userId) return null;

  const todoData = {
    userId,
    content,
    date: toApiDate(selectedDate),
    done,
  };

  return await addTodoRequest(todoData);
};

export const modifyTodo = async (
  todoId,
  content,
  done,
  selectedDate,
  userId,
) => {
  if (!userId || !todoId) return null;

  const todoData = {
    userId,
    content,
    date: toApiDate(selectedDate),
    done,
  };

  return await modifyTodoRequest(todoId, todoData);
};

export const deleteTodo = async (todoId) => {
  if (!todoId) return false;
  return await deleteTodoRequest(todoId);
};

export const toggleTodoDone = async (todoId, done) => {
  if (!todoId) return null;
  return await toggleTodoDoneRequest(todoId, done);
};

const toApiDate = (dateKey) =>
  `${dateKey.slice(0, 4)}-${dateKey.slice(4, 6)}-${dateKey.slice(6, 8)}`;