import {
  getTodosByDateRequest,
  getMonthTodosRequest,
  addTodoRequest,
  modifyTodoRequest,
  deleteTodoRequest,
  toggleTodoDoneRequest,
} from "../apis/todoApi";

export const monthTodo = async (currentYear, currentMonth, userId) => {
  if (!userId) return [];
  return await getMonthTodosRequest(userId, currentYear, currentMonth);
};

export const dayTodo = async (selectedDate, userId) => {
  if (!userId) return [];
  return await getTodosByDateRequest(userId, selectedDate);
};

export const addTodo = async (selectedDate, userId, content, done = false) => {
  if (!userId) return null;

  const todoData = {
    userId,
    content,
    date: selectedDate,
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
    date: selectedDate,
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
