
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "SERVICES", href: "#services" },
    { label: "WORKS", href: "#works" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#1C1917]/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-[10px] font-black tracking-[0.5em] text-[#1C1917] uppercase">
          NINA BARANGO
        </a>
        
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              className="text-[9px] font-bold tracking-[0.3em] text-[#1C1917]/60 hover:text-[#D93025] transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="text-[9px] font-black tracking-[0.2em] bg-[#1C1917] text-white px-6 py-2 rounded-full hover:bg-[#D93025] transition-all"
        >
          LET'S TALK
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
