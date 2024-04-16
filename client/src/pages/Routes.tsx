import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./auth/ProtectedRoute";

import Landing from "./landing";
import Register from "./auth/register";
import Login from "./auth/login";
import Dashboard from "../components/dashboard/Dashboard";

const Routes = () => {
  const { token } = useAuth();

  const publicRoutes = [
    {
      path: "/home",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  const authenticatedRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? authenticatedRoutes : []),
    ...authenticatedRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
