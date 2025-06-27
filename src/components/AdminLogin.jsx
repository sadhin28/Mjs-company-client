import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
     const navigate= useNavigate()
     const {user,setUser}=useContext(AuthContext)
  const  handelbutton =()=>{
    setUser( !null)
    if(user){
        navigate('/add-items')
    }
  }
    return (
        <div>
            <button onClick={handelbutton} className='btn  h-20 w-30 bg-amber-600 '>Login</button>
        </div>
    );
};

export default AdminLogin;