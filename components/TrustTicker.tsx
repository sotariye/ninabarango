
import React from 'react';

const TrustTicker: React.FC = () => {
  const items = [
    "FOUNDER OF SOPLUGGED",
    "PRODUCER: CBC DOCS",
    "2,000+ EVENT ATTENDEES",
    "PODCASTER"
  ];

  return (
    <div className="bg-[#1C1917] py-6 md:py-8 border-y border-[#1C1917] overflow-hidden">
      <div className="flex w-max">
        <div className="flex animate-marquee shrink-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-white text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mx-12">
                    {item}
                  </span>
                  <span className="text-[#D93025] text-lg">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
        <div className="flex animate-marquee shrink-0" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-white text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mx-12">
                    {item}
                  </span>
                  <span className="text-[#D93025] text-lg">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustTicker;
