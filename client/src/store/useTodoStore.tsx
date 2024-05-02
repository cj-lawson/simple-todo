import { create } from "zustand";

type Store = {
  userName: string;
  setUserName: (name: string) => void;
  completeTodoCount: number;
  incompleteTodoCount: number;
  setCompleteTodoCount: (count: number) => void;
  incrementCompleteCount: () => void;
  setIncompleteTodoCount: (count: number) => void;
};

const useTodoStore = create<Store>((set) => ({
  userName: "",
  setUserName: (name: string) => set({ userName: name }),
  completeTodoCount: 0,
  incompleteTodoCount: 0,
  setCompleteTodoCount: (count: number) => set({ completeTodoCount: count }),
  incrementCompleteCount: () =>
    set((state: any) => ({ completeTodoCount: state.completeTodoCount + 1 })),
  setIncompleteTodoCount: (count: number) =>
    set({ incompleteTodoCount: count }),
}));
export default useTodoStore;
