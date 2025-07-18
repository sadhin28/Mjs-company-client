import { Link } from "react-router-dom";


import {  Eye,  Trash2 } from "lucide-react";
import { VscAdd } from "react-icons/vsc";
const Cards = ({data,handelDelete}) => {
  
  const { name, photo, details, Watt, Lumen, gurantee, price } = data

  return (
     <div data-aos="zoom-in" className="md:w-80 w-90 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className='flex justify-center'>
          <img  src={photo} alt={name} className="w-full mt-2  h-48 object-contain" />

      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
        <p className="text-sm text-gray-500 mb-3">{details}</p>

        <div className="text-gray-700  text-sm space-y-1">
          <p><strong>Watt:</strong> {Watt}W</p>
          <p><strong>Lumen:</strong> {Lumen}</p>
          <p><strong>Guarantee:</strong> {gurantee}</p>
          <p><strong>Price:</strong> ৳{price}</p>
        </div>

        <div className="flex justify-between mt-4">
          <Link
            to={`/details/${data._id}`}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
          >
            <Eye className="w-4 h-4" /> View
          </Link>
        
           <Link
            to={`/dashboard/${data._id}`}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200"
          >
            <VscAdd className="w-4 h-4" /> Add To Card
          </Link>
         
          
        
           <button
            onClick={()=>handelDelete(data._id)}
            className="flex hover:cursor-pointer items-center gap-1 px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
         
        
        </div>
      </div>
    </div>
  );
};

export default Cards;