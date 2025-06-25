import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../layout/Home";
import Additem from "../components/page/Additem";
import Updateitems from "../components/page/Updateitems";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/led-bulbs')
            },
            {
                path:'/add-items',
                element:<Additem></Additem>
            },
            {
                path:'/update-items',
                element:<Updateitems></Updateitems>

            }
        ]
    }
])