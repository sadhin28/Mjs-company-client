import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
    const items =useLoaderData()
    return (
        <div>
           
            <h1>{items.name}</h1>
        </div>
    );
};

export default Dashboard;