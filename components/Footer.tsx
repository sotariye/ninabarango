
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mnjanlzg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
      } else {
        console.error("Form submission failed");
        setFormState('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      setFormState('idle');
      alert("Something went wrong. Please try again.");
    }
  };

  const links = [
    { label: "EMAIL", url: "mailto:ninabarango@gmail.com" },
    { label: "LINKEDIN", url: "https://www.linkedin.com/in/nina-barango/" },
    { label: "READ MY THOUGHTS ON SUBSTACK", url: "https://substack.com/@ninabarango" }
  ];

  return (
    <footer className="bg-[#FAFAF9] pb-12 overflow-hidden">
      {/* Manifesto Section - Architectural Layout for Ultrawide Screens */}
      <div className="w-full relative bg-stone-200 overflow-hidden reveal flex flex-col items-center justify-start">
        <img
          src={`${import.meta.env.BASE_URL}images/footer-portrait.jpg`}
          alt="Nina Barango Editorial Portrait"
          className="w-full h-auto grayscale brightness-75 transition-transform duration-1000 block"
          loading="lazy"
          decoding="async"
        />

        {/* Architectural Manifesto Overlay */}
        <div className="hidden md:flex absolute inset-0 z-10 flex-col items-center justify-start text-center px-6 pt-32">
          <h2 className="font-serif-editorial text-7xl md:text-8xl lg:text-[11vw] font-black text-white leading-[0.8] tracking-tighter mb-8 md:mb-12 uppercase drop-shadow-2xl">
            THINK <br className="md:hidden" /> BIGGER.
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-white text-sm md:text-lg font-bold tracking-[0.2em] uppercase drop-shadow-lg">
              You're thinking small when you ought to be thinking big.
            </p>
          </div>
        </div>

        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      </div>

      {/* Strategic Contact Form Section */}
      <div id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48 border-t border-[#1C1917]/10 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="reveal">
            <p className="text-[10px] font-black tracking-[0.4em] text-[#1C1917] uppercase mb-8 whitespace-nowrap">
              GET IN TOUCH
            </p>
            <h3 className="font-serif-editorial text-5xl md:text-7xl font-black tracking-tighter text-[#D93025] uppercase leading-[0.9] mb-8">
              WE'LL FIGURE <br /> IT OUT.
            </h3>
            <p className="text-xl text-[#1C1917]/60 max-w-md">
              Now accepting inquiries for Q1 & Q2 2026
            </p>
          </div>

          <div className="reveal interactive">
            {formState === 'success' ? (
              <div className="h-full flex flex-col justify-center items-start">
                <p className="text-[10px] font-black tracking-[0.4em] text-[#D93025] uppercase mb-4">SENT.</p>
                <p className="text-3xl font-serif-editorial italic text-[#1C1917]">I'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-2 border-b border-[#1C1917]/20 pb-4 focus-within:border-[#D93025] transition-colors">
                  <label className="text-[9px] font-black tracking-[0.3em] text-[#1C1917]/40 uppercase">Your Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="REQUIRED"
                    className="w-full bg-transparent border-none p-0 text-xl font-medium focus:ring-0 placeholder:text-[#1C1917]/10"
                  />
                </div>
                <div className="space-y-2 border-b border-[#1C1917]/20 pb-4 focus-within:border-[#D93025] transition-colors">
                  <label className="text-[9px] font-black tracking-[0.3em] text-[#1C1917]/40 uppercase">Email Address</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="REQUIRED"
                    className="w-full bg-transparent border-none p-0 text-xl font-medium focus:ring-0 placeholder:text-[#1C1917]/10"
                  />
                </div>
                <div className="space-y-2 border-b border-[#1C1917]/20 pb-4 focus-within:border-[#D93025] transition-colors">
                  <label className="text-[9px] font-black tracking-[0.3em] text-[#1C1917]/40 uppercase">Objective</label>
                  <input
                    required
                    name="objective"
                    type="text"
                    placeholder="ACTIVATION / PRODUCTION / STRATEGY"
                    className="w-full bg-transparent border-none p-0 text-xl font-medium focus:ring-0 placeholder:text-[#1C1917]/10 uppercase"
                  />
                </div>
                <button
                  disabled={formState === 'submitting'}
                  className="w-full md:w-auto px-12 py-5 bg-[#1C1917] text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-[#D93025] transition-all disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'SENDING...' : 'SUBMIT INQUIRY'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Signature & Credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 reveal">
        <div className="flex flex-col items-center justify-between gap-12 border-t border-[#1C1917]/10 pt-12">

          <div className="flex space-x-8 md:space-x-12">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black tracking-[0.3em] text-[#1C1917] hover:text-[#D93025] transition-colors uppercase interactive cursor-none"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-[9px] md:text-[10px] font-bold text-[#1C1917]/60 tracking-[0.4em] uppercase text-center leading-loose">
            © {new Date().getFullYear()} NINA BARANGO. DESIGNED & BUILT BY ME. (<a href="mailto:ninabarango@gmail.com?subject=I%20need%20a%20website,%20please" className="hover:text-[#D93025] transition-colors underline decoration-1 underline-offset-4 interactive">YES, I CAN BUILD YOURS TOO.</a>)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
