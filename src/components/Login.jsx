import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
       const navigate= useNavigate()
     const {setUser,login}=useContext(AuthContext)
 
 
 
     const  handleSubmit =(e)=>{
    e.preventDefault()
    const email= e.target.email.value
    const password= e.target.password.value
    login(email,password)
    .then(res=>{
      setUser(res.user)
        
    })
    .then(error=>{
       toast.error(error.message)
     
    })
    navigate('/')
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
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Email
            </label>
            <input
              type="email"
              id="text"
             
              name='email'
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Email"
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
            Login now
          </button>
           <div className='text-center mt-2'><span>You have no Acount? </span> <Link to='/adminlogin'><span className="text-green-600 hover:underline">Register Now</span></Link></div>
        </form>
      </div>
    </div>
    );
};

export default Login;