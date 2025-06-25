import { useLoaderData } from "react-router-dom";

const Home = () => {
    const bulbs = useLoaderData()
    return (
        <div>
           {
             bulbs.map(data=><div>
                <h1>{data.name}</h1>
             </div>)
           }
        </div>
    );
};

export default Home;