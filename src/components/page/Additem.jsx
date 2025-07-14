
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Additem = () => {
    const navigate=useNavigate()

     const [imageBase64, setImageBase64] = useState('');

 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBase64(reader.result); // base64 string
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
    const handleSubmit = (e) => {
       e.preventDefault();
       const allData={
      name:e.target.name.value,  
      price:e.target.price.value,
      Watt:e.target.Watt.value,
      Lumen:e.target.Lumen.value,
      gurantee:e.target.gurantee.value,
      details:e.target.details.value,
      photo:imageBase64
       }
       
       fetch('http://localhost:5000/ledbulbs',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(allData)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        
           Swal.fire({
             title:'Success',
             text:"Add Bulb Item Successfully",
             icon:'success',
             confirmButtonText:'Cool'
           })
           navigate('/')
           
        
       })
       .catch(errors=>{
          Swal.fire({
             title:'Error',
             text:`${errors.message}`,
             icon:'error',
             confirmButtonText:'Cool'
           })
       })
      
    };
    const data =[
        
     { name: 'name',  label: 'Name', placeholder: 'Enter Bulb name' },
     { name: 'price', label: 'Price', placeholder: 'Enter Bulb Price' },
     { name: 'Watt', label: 'Watt', placeholder: '20 W' },
     { name: 'Lumen', label: 'Lumen', placeholder: 'Lumen' },
     { name: 'gurantee', label: ' guarantee', placeholder: '6 month / 1 year' },
     { name: 'details', label: 'Details', placeholder: 'Enter Bulb details' }
    ]
 
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10 relative">
                <Link to="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </Link>

                <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">Add New Bulb</h2>
                

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                     <div>
                      {
                        data.map(data=><div key={data.name}>
                                <label className="block mb-1 font-medium">{data.label}</label>
                                <input
                                    name={data.name}
                                    placeholder={data.placeholder}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                                />
                               
                        </div>)
                      }  
                    </div>  
                    <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border p-2 rounded"
                            required
                        />    
                    <button
                        type="submit"
                        className="w-full bg-[#d6a86b] hover:bg-[#c99757] text-white font-semibold py-2 px-6 rounded transition-all duration-300"
                    >
                        Add Now
                    </button>
                </form>

              
            </div>
        </div>
    );
};

export default Additem;