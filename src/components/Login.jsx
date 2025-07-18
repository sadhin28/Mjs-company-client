import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.init';

const Login = () => {
  const navigate = useNavigate()
  const { setUser, login } = useContext(AuthContext)



  const handleSubmit = (e) => {

    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    login(email, password)
    .then(result =>{
      console.log(result.user)
      const lastSignInTime =result?.user?.metadata?.lastSignInTime
      const loginInfo={email,lastSignInTime}
      //update user login time
      fetch('https://mjs-company-server.onrender.com/user',{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(loginInfo)
           })
           .then(res=>res.json())
           .then(data=>{
            if(data.acknowledged == true){
              navigate('/')
            }
      
           })


    })
    .catch(error=>{
      console.log(error)
    })
  }

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const handelLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        setUser(res.user)

      })
      .catch(error => {
        navigate('/')
      })
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
          <div className="text-center mt-2 mb-2">--------------- or ---------------</div>
          <button onClick={handelLoginWithGoogle} className="btn w-full bg-white flex justify-center items-center gap-2   text-black border p-2 rounded-xl ">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            <div>Login with Google</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;