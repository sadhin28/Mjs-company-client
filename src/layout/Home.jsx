import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
   const newbulbs = useLoaderData()
   const [bulbs,setbulbs]=useState(newbulbs)
    const  handelDelete= _id => { 
      
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     console.log(_id)
       fetch(`http://localhost:5000/ledbulbs/${_id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remaining= bulbs.filter(bulb=>bulb._id !== _id)
    setbulbs(remaining)
  })
  
  }
});

      
    }
    return (
        <div   className="grid w-11/12 mx-auto mt-10 mb-10  md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-15">
           {
             bulbs.map(data=><Cards   handelDelete={handelDelete}  data={data}></Cards>)
           }
        </div>
    );
};

export default Home;