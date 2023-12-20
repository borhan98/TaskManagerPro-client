import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root";
import Login from "../Pages/Login";


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
        path: "/login",
        element: <Login />
    }
])