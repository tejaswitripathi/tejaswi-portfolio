import { create } from "zustand";

export const useSpiralStore = create((set) => ({
  page: 0, // 0 = top, 1 = bottom
  setPage: (page) => set({ page }),
}));
