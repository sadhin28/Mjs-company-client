import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const Bulbs= useLoaderData()
    return (
        <div>
            <h1>Details</h1>
        </div>
    );
};

export default Details;