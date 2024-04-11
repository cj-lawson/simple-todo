import React from "react";
import ReactDOM from "react-dom/client";
// import {useState} from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/home";
import ErrorPage from "./pages/error";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Todo from "./pages/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
