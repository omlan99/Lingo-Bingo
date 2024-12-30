import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [

            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'signup',
                element : <SignUp></SignUp>
            },
            {
                path : 'login',
                element : <Login></Login>
            }
        ]
    }
])

export default router