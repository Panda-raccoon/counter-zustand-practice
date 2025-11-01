// state를 저장해두는 store를 만드는 함수
// () => {} : 콜백함수

import { create } from "zustand";

const counterStore = create((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  increaseBy: (value) => set((state) => ({ count: state.count + value })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  decreaseBy: (value) => set((state) => ({ count: state.count + value })),
}));

export default counterStore;
