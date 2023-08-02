import create from 'zustand';
import { persist } from 'zustand/middleware';

type InitialState = {
  total: number;
};

type ActionsMenuTotals = {
  actions?: {
    setTotal: (total: number) => void;
    setInitialState: () => void;
  };
};

type Store = InitialState & ActionsMenuTotals;

export type { Store, InitialState };

const initialState: InitialState = {
  total: 0,
};

const storage = {
  name: 'app-state',
  partialize: (state: Store) => {
    return state.total;
  },
};

// aparece deprecado pero la documnetacion asi usa el Store
const useStore = create<Store>()(
  persist((set): Store => {
    return {
      ...initialState,
      actions: {
        setTotal: (total: number) => {
          return set((state: Store) => ({
            ...state, total,
          }));
        },
        setInitialState: () => set(() => initialState),
      },
    };
  }, storage)
);

export const useTotalStore = () => {
  return useStore((state) => ({
    totalNovelties: state.total,
  }));
};

export const useActions = () => {
  return useStore((state) => state.actions);
};
