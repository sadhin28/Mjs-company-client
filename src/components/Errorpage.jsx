import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div className='mb-50'>
                 <Link to="/" className="absolute top-4  left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </Link>
            </div>
            <h1 className='text-6xl text-center'>Error</h1>
        </div>
    );
};

export default Errorpage;