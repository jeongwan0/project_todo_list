const BASE_URL = "http://localhost:8080";

export const getTodosByDateRequest = async (userId, date) => {
  const response = await fetch(
    `${BASE_URL}/todos?userId=${userId}&date=${date}`,
  );

  if (!response.ok) {
    throw new Error("투두 조회 실패");
  }

  return await response.json();
};

export const addTodoRequest = async (todoData) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error("투두 추가 실패");
  }

  return await response.json();
};

export const modifyTodoRequest = async (todoId, todoData) => {
  const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error("투두 수정 실패");
  }

  return await response.json();
};

export const deleteTodoRequest = async (todoId) => {
  const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("투두 삭제 실패");
  }

  return true;
};

export const toggleTodoDoneRequest = async (todoId, done) => {
  const response = await fetch(`${BASE_URL}/todos/${todoId}/done`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ done }),
  });

  if (!response.ok) {
    throw new Error("투두 완료 상태 변경 실패");
  }

  return await response.json();
};
