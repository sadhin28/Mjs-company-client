import { Pencil } from 'lucide-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const Bulbs = useLoaderData()
    const { _id, name, photo, details, Watt, Lumen, gurantee, price } = Bulbs
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8">
            <div data-aos='zoom-in' className="w-full max-w-3xl bg-white shadow-md rounded-lg p-10 relative gird ">
                <div>
                    <Link to="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                        ← Back to home
                    </Link>
                </div>
                <div className='grid justify-items-center md:flex py-20 md:gap-20'>
                    <div >
                        <img className=' h-49' src={photo} alt={name} />

                    </div>
                    <div className='mt-5'>
                        <h1><span className='font-bold'>Name</span> : {name}</h1>
                        <h1><span className='font-bold'>Price</span> : {price}</h1>
                        <h1><span className='font-bold'>Watt</span> : {Watt}</h1>
                        <h1><span className='font-bold'>Lumen</span> : {Lumen}</h1>
                        <h1><span className='font-bold'>Gurantee</span> : {gurantee}</h1>
                        <h1><span className='font-bold'>Details</span> : {details}</h1>

                    </div>
                    
                </div>
                  <div className='w-40  flex justify-center font-bold mx-auto justify-items-center' >
                        <Link to={`/updateBulb/${_id}`}
                            className="flex items-center gap-1 px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200">
                                <Pencil className="w-4 h-4" /> Update data
                            </Link>
                </div>
            </div>

        </div>
    );
};

export default Details;