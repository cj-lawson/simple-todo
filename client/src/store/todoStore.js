import { create } from "zustand";

export const todoStore = create((set) => ({
  completeTodos: 0,
  incompleteTodos: 0,
  addCompletedTodo: () =>
    set((state) => ({ completeTodos: state.completeTodos + 1 })),
}));
