import { createBrowserRouter } from "react-router-dom";
import EditUser from "../component/EditUser";
import UserView from "../component/UserView";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/userview/:id',
                element: <UserView />
            },
            {
                path: '/edit/:id',
                element: <EditUser />
            }
        ]
    }
])
export default router;