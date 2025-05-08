import React from 'react';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';

export default function Header() {
  return (
    <div>
      <div className="bg-[#FDDDE6] pl-2 py-3 flex items-center">
        {/* Logo */}
        <div className="flex items-center mr-2 ml-2 cursor-pointer">
          <img src="https://reminerva.github.io/logo-min.png" alt="Logo" className="w-12 h-12" onClick={() => window.location.href = "/"}/>
          
        </div>
        <div 
          className="text-2xl font-bold text-[#E47068] ml-1 cursor-pointer hover:text-[#9b4b45]" 
          style={{ fontFamily: 'Xenois Soft W01 Heavy' }} onClick={() => window.location.href = "/"}>
            <h1
              className="font-bold"
              style={{
                WebkitTextStroke: '0.5px white'
              }}
            >
              C H A R M E D I A
            </h1>
          </div>

        {/* Search Bar */}
        {/* <div className="relative rounded-full border border-gray-300 flex items-center w-96">
          <FiSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Cari produk..."
            className="pl-10 pr-10 py-2 w-full rounded-full focus:outline-none"
          />
          <BiMicrophone className="absolute right-3 text-gray-500 cursor-pointer" />
        </div> */}

        {/* User and Shopping Cart Icons */}
        {/* <hr className="border-t border-black-300 my-4" />
        <div className="flex items-center space-x-4 mr-1">
          <FiUser className="text-2xl text-gray-700 cursor-pointer" />
          <FiShoppingCart className="text-2xl text-gray-700 cursor-pointer" />
        </div> */}
      </div>
      <hr className='border-1 border-black-400'/>
    </div>
  );
}