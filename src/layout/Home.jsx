import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

const Home = () => {
    const bulbs = useLoaderData()
    return (
        <div>
           {
             bulbs.map(data=><Cards data={data}></Cards>)
           }
        </div>
    );
};

export default Home;