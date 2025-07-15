import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../layout/Home";
import Additem from "../components/page/Additem";
import Updateitems from "../components/page/Updateitems";
import Errorpage from "../components/Errorpage";
import Details from "../components/Details";
import AdminLogin from "../components/AdminLogin";
import Privateroute from "./Privateroute";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import User from "../components/User";

const router = createBrowserRouter([
    
{
     path:'/',
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://mjs-company-server.onrender.com/ledbulbs')
            },
            {
                path:'/add-items',
                element:<Privateroute><Additem></Additem></Privateroute>
            },
            {
                path:`/updateBulb/:id`,
                element:<Privateroute><Updateitems></Updateitems></Privateroute>,
                loader:({params})=>fetch(`https://mjs-company-server.onrender.com/ledbulbs/${params.id}`)
                
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`https://mjs-company-server.onrender.com/ledbulbs/${params.id}`)
            },
            {
                path:'/adminlogin',
               
                element:<AdminLogin></AdminLogin>
            },
            {
                path:'/dashboard/:id',
                loader:({params})=>fetch(`https://mjs-company-server.onrender.com/ledbulbs/${params.id}`),
                element:<Dashboard></Dashboard>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/users',
                element:<Privateroute><User></User></Privateroute>,
                loader:()=>fetch('https://mjs-company-server.onrender.com/user')
            }
        ]
}
        
    
])
export default router;