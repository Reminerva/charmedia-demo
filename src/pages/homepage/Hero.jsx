import React from 'react';
import Header from '../component/Header';

const Hero = () => {
  return (
  <>
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/homepage-hero-cropped.png')" }}
    >
      {/* Main content */}
      <main className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-16 my-auto gap-10">
        <img
          src="/logo.png"
          alt="Logo"
          className="md:w-96 md:h-96 w-64 h-64 object-contain"
        />

        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#e47068] md:mb-10 mb-5 text-center space-y-2 tracking-wide text-outline-tailwind" style={{ fontFamily: 'BalooBhai', outline: 'black' }}>
            CHARMEDIA
          </h1>
          <p className="text-[#e47068] text-xl md:text-4xl leading-relaxed md:mb-10 md:text-justify text-center space-y-2" style={{ fontFamily: 'Bright' }}>
            <span>
                A tiny bundle of cuteness you can take anywhere! 
                Each keychain is carefully handmade with love—perfect for adding 
                a cozy touch to your bags, keys, or gifts!
            </span>
          </p>
        </div>
      </main>
    </div>
  </>
  );
};

export default Hero;
