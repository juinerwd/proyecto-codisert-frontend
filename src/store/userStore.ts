import { create } from 'zustand'
import { UserBeneficiary } from '../types/user'
import { getDataBeneficiary } from '../services/api';

interface UserStore {
    users: UserBeneficiary[];
    fetchUsers: () => Promise<void>;
}

export const useStore = create<UserStore>((set) => ({
  users: [],
  fetchUsers: async() => {
    const response = await getDataBeneficiary('protected/beneficiary/all')

    set({ users: response })
  }
}))