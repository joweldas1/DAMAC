import React from 'react';
import './toggle.css'
import { IoClose } from "react-icons/io5";

const Toggle = ({setOpen}) => {
    return (
        <div className='w-full h-screen bg-[rgba(6,35,73,.9)] '>
            <ul className='text-white flex space-y-5 font-poppins flex-col text-2xl  justify-center pt-14 items-center'>
                <li>Home</li>
                <li>Contact</li>
                <li>AboutUs</li>
                <li>Login</li>
                <button onClick={()=>setOpen(false)}>
                <IoClose className="text-3xl text-white" />
                </button>
            </ul>
        </div>
    );
};

export default Toggle;