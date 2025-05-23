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
import PrivatRoute from "../provider/PrivetRoute";
import Loading from "../pages/Loading";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts  ,
        errorElement:<ErrorPage></ErrorPage>,
        hydrateFallbackElement:<Loading></Loading>,
        children:[
            {
              path:"/",
              element:<Home></Home>,
              loader:()=>fetch('http://localhost:3000/hobbys'),
              hydrateFallbackElement:<Loading></Loading>,
            },
            {
              path:"/all-groups",
              element: <AllGroups></AllGroups>,
              loader:()=>fetch('http://localhost:3000/all-hobbys'),
              hydrateFallbackElement:<Loading></Loading>,
            },
            {
              path:"/create-group",
              element: <PrivatRoute>
                <CreateGroup></CreateGroup>
              </PrivatRoute>
            },
            {
              path:"/my-groups",
              element:<PrivatRoute>
                <MyGroups></MyGroups>
              </PrivatRoute>
            },
        ]
    },
           {
              path:"/group-details/:id",
              element: <PrivatRoute>
                <GroupDetails></GroupDetails>
              </PrivatRoute>,
               loader:()=>fetch('http://localhost:3000/all-hobbys'),
               hydrateFallbackElement:<Loading></Loading>,
            },
            {
              path:"/update-group/:id",
              element: <PrivatRoute>
                <UpdateGroup></UpdateGroup>
              </PrivatRoute> ,
              loader:({params})=>fetch(`http://localhost:3000/all-hobbys/${params.id}`),
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