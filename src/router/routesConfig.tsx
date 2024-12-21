import React from 'react';
import Dashboard from "../features/Dashboard/pages/Dashboard"
import Beneficiario from "../features/Dashboard/pages/Beneficiario"
import CreateUser from "../features/Dashboard/pages/CreateUser"
import Admin from "../features/Dashboard/pages/Admin"

import { Role } from '../store/roleStore';

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  roles: Role[];
  label?: string;
  icon?: React.ReactNode;
}

export const routes: RouteConfig[] = [
  { path: '/', element: <Dashboard />, roles: ['admin_super', 'admin_registrador', 'admin_lector'], label: 'Dashboard' },
  { path: 'beneficiario', element: <Beneficiario />, roles: ['admin_super', 'admin_registrador'], label: 'Lista de usuarios' },
  { path: 'create-user', element: <CreateUser />, roles: ['admin_super', 'admin_registrador'], label: 'Crear usuario' },
  { path: 'administradores', element: <Admin />, roles: ['admin_super'], label: 'Gestión de Administradores' },
];
