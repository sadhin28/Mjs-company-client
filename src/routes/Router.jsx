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

const router = createBrowserRouter([
    
{
     path:'/',
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/ledbulbs')
            },
            {
                path:'/add-items',
                element:<Privateroute><Additem></Additem></Privateroute>
            },
            {
                path:`/updateBulb/:id`,
                element:<Privateroute><Updateitems></Updateitems></Privateroute>,
                loader:({params})=>fetch(`http://localhost:5000/ledbulbs/${params.id}`)
                
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/ledbulbs/${params.id}`)
            },
            {
                path:'/adminlogin',
               
                element:<AdminLogin></AdminLogin>
            },
            {
                path:'/dashboard/:id',
                loader:({params})=>fetch(`http://localhost:5000/ledbulbs/${params.id}`),
                element:<Dashboard></Dashboard>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
}
        
    
])
export default router;