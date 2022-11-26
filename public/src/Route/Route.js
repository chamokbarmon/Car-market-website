import { createBrowserRouter } from "react-router-dom";
import Main from "../Componed/Layout/main/Main";
import Admin from "../Pages/Admin/Admin";
import AllSellers from "../Pages/Allsellers/AllSellers";
import Blog from "../Pages/Blogs/Blog";
import CatagoryItem from "../Pages/CatagoryItem/CatagoryItem";
import CatagoryPrivate from "../Pages/CatagoryPrivate/CatagoryPrivate";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashBoardLayout from "../Pages/Dashboard/DashBoardLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
          
            {
                path:'/Carsoptions/:id',
                element:<CatagoryItem></CatagoryItem>,
                loader:({params}) =>fetch(`https://used-product-market-server.vercel.app/Carsoptions/${params.id}`),
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            
            
        ]
    },
    {
        path:'/dashboard',
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/seller',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/admin',
                element:<Admin></Admin>
            },
        ]
    }
    

       

    

    

])
export default router;