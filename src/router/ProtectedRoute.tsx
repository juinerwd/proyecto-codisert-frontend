import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children?: React.ReactNode;
}

const ProtectedRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
  if (!isAuthenticated) return <Navigate to="/" replace />

  return children ? children : <Outlet />
}

export default ProtectedRoute;
