
import React from 'react';

const Services: React.FC = () => {
  const divisions = [
    {
      header: "EXPERIENTIAL PRODUCTION",
      detail: "Turnkey execution for Brand Activations, Conferences, and Pop-ups. From site selection to vendor management, I handle the entire lifecycle of the event so you can focus on the guest experience.",
      ctaLabel: "INQUIRE ->",
      ctaUrl: "#contact"
    },
    {
      header: "EVENT FACILITATION",
      detail: "For teams that need direction or events that need a voice. I provide operational roadmaps for your production team to execute, and offer high-level hosting and moderation for your stage.",
      ctaLabel: "INQUIRE ->",
      ctaUrl: "#contact"
    },
    {
      header: "FOUNDER 1:1 SESSIONS",
      detail: "A 60-minute clarity call for early-stage founders. Book a 1 on 1 or Q&A session to ask me anything related to starting or growing a business in Canada",
      ctaLabel: "BOOK SESSION ->",
      ctaUrl: "https://calendly.com/ninabarango-zhac/60min"
    }
  ];

  return (
    <section className="bg-[#FAFAF9]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {divisions.map((division, index) => (
          <div
            key={index}
            className={`p-12 md:p-16 lg:p-24 border-[#1C1917]/10 flex flex-col items-start reveal
              ${index === 1 ? 'md:border-x' : ''} 
              ${index !== 0 ? 'border-t md:border-t-0' : ''}
              border-b md:border-b-0
            `}
          >
            <h3
              className="font-serif-editorial text-4xl lg:text-5xl font-black tracking-tighter mb-8 uppercase leading-none"
              style={{ color: '#D93025' }}
            >
              {division.header}
            </h3>
            <p className="text-base text-[#1C1917] leading-relaxed font-normal max-w-xs mb-8">
              {division.detail}
            </p>
            <a
              href={division.ctaUrl}
              target={division.ctaUrl.startsWith('http') ? "_blank" : "_self"}
              rel={division.ctaUrl.startsWith('http') ? "noopener noreferrer" : ""}
              className="text-[10px] font-black tracking-[0.3em] uppercase underline decoration-1 underline-offset-8 hover:text-[#D93025] transition-colors interactive"
            >
              {division.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
