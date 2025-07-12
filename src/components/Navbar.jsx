import {  useContext, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import userLogo from '../assets/image.png'





//motion

import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import { cn } from "../lib/util";
import Overlay from "../ui/Overlay";
import useMobile from "../lib/ForMobile";
import { AuthContext } from "../provider/AuthProvider";

const COLORS_TOP = ["#29C48BFF","#DF1767FF","#184B9BFF", "#AC0BC5FF", "#949823FF", "#335F56FF"];
//end



function Header() {
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
 
    //motion start
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
    //motion end
    const isMobile = useMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const {user,setUser,Logout}=useContext(AuthContext)
    console.log(user)
    return (

        <motion.header

            style={{
                backgroundImage,

            }}
            className={cn(

                "py-5 k px-5  text-white  z-20 transition-shadow duration-300",
                isSticky ? "sticky bg-black text-white  top-0 shadow-sm" : "",
                isMobile ? "shadow-sm  px-5" : ""
            )}
        >

            <div className="width items-center padding-x flex gap-10 justify-between">
                <div className="flex  gap-5 justify-center justify-items-center">
                  
                    <div className="font-semibold text-lg text-nowrap">MJS COMPANY</div>
                   <div className="flex gap-2 items-center">
                {
                    user ? <img className="md:w-10 md:h-10 w-5 h-5 rounded-full object-cover" src={user && user.
                        photoURL} alt="" /> : <img className="w-10 h-10 rounded-full object-cover"
                            src={userLogo} alt="" />
                }
                {
                    user && user?.email ? <Link to="/" onClick={Logout} className="btn btn-neutral text-xs md:text-xl rounded-none">Log-Out</Link> : <Link to='/login' className="btn btn-neutral text-xs md:text-xl rounded-none">Log-In</Link>
                }
            </div>
                    
                </div>

                {isMobile ? (
                    <button className="cursor-pointer" onClick={onOpen}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                ) : null}

                {isMobile ? (
                    <>
                        <Overlay isOpen={isOpen} onClose={onClose} />
                        <aside
                            className={cn(
                                "h-screen fixed top-0 right-0 w-[18rem] shadow-sm bg-base-100 z-40 transition-all duration-300 p-10",
                                isOpen ? "translate-x-0" : "translate-x-full"
                            )}
                        >
                            <div className="flex items-center text-white justify-between">
                                <h1 className="font-semibold text-xl text-nowrap">
                                    MJS COMPANY
                                </h1>

                                <button
                                    onClick={onClose}
                                    className="cursor-pointer size-7 bg-red-100 text-red-500 rounded-full flex items-center justify-center"
                                >
                                    <VscClose />
                                </button>
                            </div>

                            <ul className="flex flex-col text-white gap-5 mt-7">
                                {navItems?.map(({ label, link }, index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer text-base-content-200/85 text-nowrap"
                                    >
                                        <NavLink to={link} >{label}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </>
                ) : (
                    <nav>
                        <ul className="flex items-center gap-7">
                            {navItems?.map(({ label, link }, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer text-base-content-200/85 text-nowrap"
                                >
                                    <NavLink to={link} >{label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

            </div>

        </motion.header>


    );
}

export default Header;