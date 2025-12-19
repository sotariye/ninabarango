
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Overlay - Luxury Editorial feel */}
      <img 
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000" 
        alt="Manifesto Backdrop" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale scale-105"
      />
      
      {/* Content - Architectural Typography */}
      <div className="relative z-10 text-center px-6 reveal">
        <h2 className="font-serif-editorial text-7xl md:text-8xl lg:text-[12vw] font-black text-white leading-[0.85] tracking-tighter mb-12 uppercase">
          THINK <br className="md:hidden" /> BIGGER.
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-white/90 text-sm md:text-lg font-medium tracking-[0.1em] uppercase">
            You're thinking small when you ought to be thinking big.
          </p>
          <div className="w-12 h-[1px] bg-[#D93025] mx-auto my-8"></div>
          <p className="text-white/50 text-[10px] font-bold tracking-[0.4em] uppercase">
            I'm true to this, not new to this.
          </p>
        </div>
      </div>

      {/* Aesthetic Border/Frame Overlay */}
      <div className="absolute inset-12 border border-white/10 pointer-events-none hidden md:block"></div>
    </section>
  );
};

export default Manifesto;
