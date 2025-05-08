import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="font-serif text-[#333] bg-[#FFF8F0] p-6 mx-1 min-h-screen">
      {/* <nav className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Cholens' }}>
        <a href="/" className='cursor-pointer hover:text-gray-900'>Home {'>'} </a>
        <span className='text-gray-900'>Page Not Found</span>
      </nav> */}

      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-[#E47068]" style={{ fontFamily: 'LuckiestGuy' }}>404</h1>
        <p className="text-lg mt-4" style={{ fontFamily: 'Cholens' }}>Oops! The page you’re looking for doesn’t exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-2 bg-[#D2EFFF] rounded-full font-bold hover:bg-[#E47068] hover:text-white">Go Home</a>
      </div>
    </div>
  );
}
