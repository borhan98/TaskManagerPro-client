import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Dashboard/Dashboard";
import AllTasks from "../Dashboard/DashboardPages/AllTasks/AllTasks";


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
                index: true,
                element: <AllTasks />
            }
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