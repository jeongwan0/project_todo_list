import { create } from "zustand";
import { usersDummy } from "../data/usersDummy";

export const useUserStore = create((set) => ({
  user : null,

  users: usersDummy,

  setUser: (user) => set({ user }),

  addUser: (newUser) =>
    set((state) => ({
      users: [...state.users, newUser],
    })),

  clearUser: () => set({ user: null }),

  deleteUser: () => set((state) => ({
    users: state.users.filter((u) => u.id !== state.user.id),
  })),

  updateUser : (patch) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...patch } : { ...patch },
    })),
}));
