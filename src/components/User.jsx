
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const User = () => {
    const users = useLoaderData()
   
    const [datas, setUsers] = useState(users)
      // Delete handler
  const  handelDelete= _id => { 
        
        Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
       console.log(_id)
         fetch(`https://mjs-company-server.onrender.com/user/${_id}`,{
          method:"DELETE"
         })
         .then(res=>res.json())
         .then(data=>{
          console.log(data)
           Swal.fire({
        title: "Deleted!",
        text: "User has been deleted.",
        icon: "success"
      });
      const remaining= datas.filter(user=>user._id !== _id)
      setUsers(remaining)
    })
    
    }
  });
  
        
      }

  
    return (
     <div className="p-4">
      <h1 className="py-4"> TOTAL USERS ( {datas.length})</h1>
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Email</th>
                  
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">LastSignInTime</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {datas.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.lastSignInTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-2">
                     
                      <button
                        onClick={() => handelDelete(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {datas.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        
    );
};

export default User;