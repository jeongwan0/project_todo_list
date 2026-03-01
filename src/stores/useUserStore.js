import React from "react";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  clearUser: () => set({ user: null }),

  updateUser: (patch) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...path } : { ...patch },
    })),
}));
