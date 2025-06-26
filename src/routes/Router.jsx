import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../layout/Home";
import Additem from "../components/page/Additem";
import Updateitems from "../components/page/Updateitems";
import Errorpage from "../components/Errorpage";
import Details from "../components/Details";

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
                element:<Additem></Additem>
            },
            {
                path:'/update-items',
                element:<Updateitems></Updateitems>

            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/ledbulbs/${params.id}`)
            }
        ]
}
        
    
])
export default router;