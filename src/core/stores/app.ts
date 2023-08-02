import create from 'zustand'
import { persist } from 'zustand/middleware'

type InitialState = {
  token: string
}

type ActionsToken = {
  actions?: {
    setToken: (token: string) => void
    setInitialState: () => void
  }
}

type Store = InitialState & ActionsToken

export type { Store, InitialState }

const initialState: InitialState = {
  token: '',
}

const storage = {
  name: 'app-state',
  partialize: (state: Store) => {
    return state.token
  },
}

// aparece deprecado pero la documnetacion asi usa el Store
const useStore = create<Store>()(
  persist((set): Store => {
    return {
      ...initialState,
      actions: {
        setToken: (token: string) => {
          return set((state: Store) => ({
            ...state,
            token,
          }))
        },
        setInitialState: () => set(() => initialState),
      },
    }
  }, storage)
)

export const useStoreApp = () => {
  return useStore((state) => ({
    token: state.token,
  }))
}

export const useActions = () => {
  return useStore((state) => state.actions)
}
