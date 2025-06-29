import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData,  useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const AdminLogin = () => {
     const admin = useLoaderData()
     const {name,pass}=admin[0];
   
     console.log(name)
     const navigate= useNavigate()
     const {setUser,user}=useContext(AuthContext)
 
 
 
     const  handleSubmit =(e)=>{
    e.preventDefault()
    const user= e.target.name.value
    const password= e.target.password.value
  
    if(name=== user && pass === password){
       
         setUser(!null)
        // user({user,pass})

        navigate(`/add-items`)
        
         toast.success("Login Success full")
    }
    else{
          toast.error("please Enter Valid UserName And Password")
    
    }
    
  }

    return (
        
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700"
            >
              User NAme
            </label>
            <input
              type="text"
              id="text"
             
              name='name'
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              
              name='password'
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    );
};

export default AdminLogin;