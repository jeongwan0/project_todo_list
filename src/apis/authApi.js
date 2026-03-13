const BASE_URL = "http://localhost:8080";

export const loginRequest = async (loginId, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      loginId,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("로그인 실패");
  }

  return await response.json();
};

export const signupRequest = async ({ loginId, password, nickname }) => {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      loginId,
      password,
      nickname,
    }),
  });

  if (!response.ok) {
    throw new Error("회원가입 실패");
  }

  return await response.json();
};

export const deleteUserRequest = async (userId) => {
  const response = await fetch(`${BASE_URL}/auth/withdraw/${userId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("회원탈퇴 실패");
  }

  return await response.text();
};

export const updateUserRequest = async (userId, userData) => {
  const response = await fetch(`${BASE_URL}/auth/user/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("회원정보 수정 실패");
  }

  return await response.json();
};