import { create } from 'zustand'
import { User } from '../types/users'

const useStore = create((set) => ({
  user: User,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))