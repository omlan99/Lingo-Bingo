import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Tutorial from "../Pages/Tutorial";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPass from "../Pages/ForgetPass";
import LearningPage from "../Pages/LearningPage";
import LessonPage from "../Pages/LessonPage";

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
                path : 'tutorial',
                element : <Tutorial></Tutorial>
            },
            {
                path : 'signup',
                element : <SignUp></SignUp>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'profile',
                element : <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path : "updateProfile",
                element : <UpdateProfile></UpdateProfile>
            },
            {
                path : 'ForgetPassword',
                element : <ForgetPass></ForgetPass>
            },
            {
                path : 'lessonPage',
                element : <LessonPage></LessonPage>,
               
            },
            {
                path : 'lesson/:no',
                element : <LearningPage></LearningPage>,
                loader : () => fetch('../../public/Vocabullary.json')
            }

        ]
    }
])

export default router