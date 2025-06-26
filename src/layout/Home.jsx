import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import Swal from "sweetalert2";
import { useState } from "react";

const Home = () => {
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
        <div>
           {
             bulbs.map(data=><Cards handelDelete={handelDelete}  data={data}></Cards>)
           }
        </div>
    );
};

export default Home;