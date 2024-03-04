import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-yellow-600 text-white text-3xl font-serif shadow-2xl p-6'>
            <ul className='flex justify-center space-x-24 cursor-pointer'>
                <Link to={"/"}>
                    <li className='hover:text-gray-900 font-semibold'>Home</li>
                </Link>
                <Link to={"/recipe"}>
                    <li className='hover:text-gray-900 font-semibold'>Recipe Page</li>
                </Link>
                <Link to={"/cart"}>
                    <li className='hover:text-gray-900 font-semibold'>Cart</li>
                </Link>
            </ul>
        </div>
    );
}

export default NavBar;
