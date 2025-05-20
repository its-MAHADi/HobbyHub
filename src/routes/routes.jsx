import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import AllGroups from "../pages/AllGroups";
import CreateGroup from "../pages/CreateGroup";
import MyGroups from "../pages/MyGroups";
import GroupDetails from "../pages/GroupDetails";
import UpdateGroup from "../pages/UpdateGroup";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts  ,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
              path:"/",
              element:<Home></Home>,
            },
            {
              path:"/all-groups",
              element: <AllGroups></AllGroups>,
            },
            {
              path:"/create-group",
              element:<CreateGroup></CreateGroup>,
            },
            {
              path:"/my-groups",
              element:<MyGroups></MyGroups>,
            },
            {
              path:"/group-details",
              element:<GroupDetails></GroupDetails>,
            },
            {
              path:"/update-group",
              element:<UpdateGroup></UpdateGroup>,
            },
        ]
    },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            }
        ]
    }
])