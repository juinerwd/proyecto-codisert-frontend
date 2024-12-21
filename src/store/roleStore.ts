import { create } from 'zustand';

export type Role = 'admin_super' | 'admin_registrador' | 'admin_lector';

interface RoleState {
  role: Role;
  setRole: (role: Role) => void;
}

export const useRoleStore = create<RoleState>((set) => ({
  role: 'admin_lector', // Rol por defecto
  setRole: (role) => set({ role }),
}));
