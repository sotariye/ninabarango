
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row bg-[#FAFAF9] overflow-hidden">
      {/* Left: Editorial Photo */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-stone-200">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-editorial.jpg`}
          alt="Nina Barango Editorial"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
      </div>

      {/* Right: Negative Space & Typography - Perfectly Centered */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[#FAFAF9]">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-xl">
          <h1
            className="font-serif-editorial text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] mb-8 uppercase"
            style={{ color: '#D93025' }}
          >
            NINA <br className="hidden md:block" /> BARANGO
          </h1>
          <p className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-[#1C1917] uppercase w-full">
            CULTURE. CAPITAL. COMMUNITY.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
