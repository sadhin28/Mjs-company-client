import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
     const admin = useLoaderData()
     
     const {name,pass}=admin[0];
     console.log(name,pass)
     const navigate= useNavigate()
     const {user,setUser}=useContext(AuthContext)
 
 
 
     const  handelbutton =(e)=>{
    e.preventDefault()
    const user= e.target.name.value
    const pass= e.target.password.value
    if(name === user && pass === pass){
        setUser(!null)
        user({user,pass})
        navigate('/add-items')
    }
  }
    return (
        <div>
            <form onSubmit={handelbutton}>
                <div className="grid w-59">
                <input className="border" type="text" name="name" id="" />
                <input className="border" type="text" name="password" id="" />
                </div>
                <button className='btn  h-20 w-30 bg-amber-600 '>Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;