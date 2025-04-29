import React, { useContext } from 'react';
import { MdDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { MovieContext } from '../context/Moviecontext';
import { Link } from "react-router-dom";

function Navbar() {
    const { toggle, setToggle } = useContext(MovieContext);

    return (
        <div className={`fixed top-0 w-full h-[60px] flex justify-between items-center px-6 sm:px-10 py-3 ${toggle ? "bg-black" : "bg-white"}`}>
            {/* Logo */}
            <Link to='/'>
            <h3 style={{ color: '#831010' }} className='text-2xl sm:text-3xl font-bold'>
                MoviesFlix
            </h3>
            </Link>

            {/* Dark Mode Toggle Button */}
            <button 
                className='p-2 sm:px-3 sm:py-2 bg-gray-300 font-bold rounded-full flex items-center justify-center'
                onClick={() => setToggle(prev => !prev)}
            >
                {toggle ? <MdDarkMode size={20} /> : <LuSun size={20} />}
            </button>
        </div>
    );
}

export default Navbar;
