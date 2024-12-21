import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Role, useRoleStore } from '../store/roleStore';

interface PrivateRouteProps {
  roles?: Role[];
  isAuthenticated: boolean;
  children?: React.ReactNode;
}

const ProtectedRoute = ({ roles, isAuthenticated, children }: PrivateRouteProps) => {
  // const role = useRoleStore((state) => state.role);
  if (!isAuthenticated) return <Navigate to="/" replace />


  // return roles?.includes(role) ? (children ? children : <Outlet />) : <Navigate to="/" replace />
  return children ? children : <Outlet />
  
}

export default ProtectedRoute;
