
import { useLoaderData } from "react-router-dom";

const User = () => {
    const user = useLoaderData()
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};

export default User;