import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Privateroute = ({children}) => {
   const {user}=useContext(AuthContext)
   useEffect(()=>{
      
   },[])
    const location = useLocation()
   
   if(user !== null){
      return children
   }
    return (
        <Navigate to="/adminlogin" state={location.pathname}/>
    );
};

export default Privateroute;