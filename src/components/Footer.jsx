import { useEffect } from 'react';

import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate
} from "framer-motion";
import { Link } from 'react-router-dom';

const navItems = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Add-Items",
        link: "/add-items",
    },
    {
        label: "Contact-Us",
        link: "/contactus",
    },
    {
        label: "About-Us",
        link: "/aboutus",
    },
    
];
const COLORS_TOP = ["#29C48BFF","#DF1767FF","#184B9BFF", "#AC0BC5FF", "#949823FF", "#335F56FF"];
const Footer = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #171302FF 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.footer
            style={{
                backgroundImage,
                
            }}
            className='px-10 md:justify-items-center items-start flex flex-col-reverse md:grid gap-10 md:grid-cols-3 text-white py-15 bg-black w-full  '>
            <div>
                
                <p className='md:text-start text-center'>Copyright © {new Date().getFullYear()} - All right reserved by Mesho Ltd</p>
                 
               
            </div>
             
            <ul className='flex flex-col gap-5'>
                <h1 className='text-xl font-black'>Nav Links</h1>
                {/* nav items */}
                {navItems.map(data=><Link to={`${data.link}`}>{data.label}</Link>)}

            </ul>
             <ul
            
             className='flex flex-col gap-5 md:gap-10'>
               
                <div className='flex gap-10 text-3xl'>
                   
                    <a target='_blank' href="#"><FaLinkedinIn /></a>
                    <a target='_blank' href="#"><CiInstagram /></a>
                     <a target='_blank' href="#"><BsTwitterX /></a>
                </div>
               
               
                <div className='flex gap-5 text-3xl'>
                   
                </div>
            </ul>
           
            

        </motion.footer>

    );
};

export default Footer;