import { create } from "zustand";

type Store = {
  completeTodoCount: number;
  incompleteTodoCount: number;
  setCompleteTodoCount: (count: number) => void;
  incrementCompleteCount: () => void;
};

const useTodoStore = create<Store>((set) => ({
  completeTodoCount: 0,
  incompleteTodoCount: 0,
  setCompleteTodoCount: (count: number) => set({ completeTodoCount: count }),
  incrementCompleteCount: () =>
    set((state: any) => ({ completeTodoCount: state.completeTodoCount + 1 })),
}));

export default useTodoStore;
