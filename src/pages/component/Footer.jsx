import React from 'react';
import { FaInstagram, FaShoppingCart, FaTiktok } from 'react-icons/fa'; // Pastikan react-icons sudah terinstal

function Footer() {
  return (
    <div>
    <hr className='border-gray-400'/>
    <footer className="bg-[#FDDDE6] py-8 text-center text-gray-600 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaInstagram size={24} />
          </a>
          <a href="https://id.shp.ee/sJtB2z9" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaShoppingCart size={24} />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaTiktok size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Charmedia. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          Jatinangor | Kontak: charmedia@gmail.com
        </p>
      </div>
    </footer>
    </div>
  );
}

export default Footer;