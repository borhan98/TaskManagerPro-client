import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Dashboard/Dashboard";
import AllTasks from "../Dashboard/DashboardPages/AllTasks/AllTasks";
import Todos from "../Dashboard/DashboardPages/Todos/Todos";
import Ongoing from "../Dashboard/DashboardPages/Ongoing/Ongoing";
import Completeds from "../Dashboard/DashboardPages/Completed/Completeds";
import PrivateRoute from "./PrivateRoute";
import EditTask from "../Dashboard/DashboardPages/AllTasks/EditTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <AllTasks />,
      },
      {
        path: "/dashboard/todos",
        element: <Todos />,
      },
      {
        path: "/dashboard/ongoing",
        element: <Ongoing />,
      },
      {
        path: "/dashboard/completed",
        element: <Completeds />,
      },
      {
        path: "/dashboard/editTasks/:id",
        element: <EditTask />,
        loader: ({params}) => fetch(`https://task-manager-pro-server.vercel.app/tasks/${params.id}`)
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
