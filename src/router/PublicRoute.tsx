import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children?: React.ReactNode;
}

const PublicRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
  if (isAuthenticated) return <Navigate to="/dashboard" replace />

  return children ? children : <Outlet />
}

export default PublicRoute;