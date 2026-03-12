import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  clearUser: () => set({ user: null }),

  deleteUser: () =>
    set((state) => ({
      user: null,
    })),

  updateUser: (patch) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...patch } : { ...patch },
    })),
}));
