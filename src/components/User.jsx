
import { useLoaderData } from "react-router-dom";

const User = () => {
    const data = useLoaderData()
    
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
      {data.map((item) => (
        <div key={item.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-600">Email: {item.email}</p>
        </div>
      ))}
    </div>
    );
};

export default User;