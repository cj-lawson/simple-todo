import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  // Check if user is authenticated
  if (!token) {
    // if not
    return <Navigate to="/home" />;
  }

  // if authenticated
  return <Outlet />;
};
