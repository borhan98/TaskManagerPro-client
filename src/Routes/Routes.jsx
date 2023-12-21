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


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "dashboard",
                element: <AllTasks />
            },
            {
                path: "/dashboard/todos",
                element: <Todos />
            },
            {
                path: "/dashboard/ongoing",
                element: <Ongoing />
            },
            {
                path: "/dashboard/completed",
                element: <Completeds />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])