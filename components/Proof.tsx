
import React, { useState } from 'react';

const LogoItem: React.FC<{ name: string; logo: string; style?: React.CSSProperties }> = ({ name, logo, style }) => {
  const [error, setError] = useState(false);

  return (
    <div className="flex items-center justify-center h-8 md:h-10 mx-12 md:mx-20 shrink-0 group">
      {!error ? (
        <img
          src={logo}
          alt={name}
          onError={() => setError(true)}
          className="w-auto h-full object-contain grayscale brightness-0 invert transition-all duration-500 group-hover:scale-110"
          style={style}
        />
      ) : (
        <span className="text-lg md:text-xl font-serif-editorial italic font-black text-white uppercase tracking-tighter whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
};

const Proof: React.FC = () => {
  const projects = [
    {
      label: "BLACK MARKET",
      sublabel: "100+ vendors",
      asset: "https://cdn.sanity.io/files/6y8p05bp/production/66485be64ac0bcfbfe15c4b620f2b210d64053b3.mp4",
      type: "video",
      url: "https://www.soplugged.com/#:~:text=Black%20Market%20at%20Stackt"
    },
    {
      label: "CREATIVE PRODUCTION",
      sublabel: "CBC DOCUMENTARY",
      asset: "https://i.cbc.ca/ais/1.7345445,1728503026000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C7728%2C5152%29%3BResize%3D1280",
      type: "image",
      url: "https://www.cbc.ca/news/canada/ottawa/ottawa-businesses-ghost-kitchen-post-lockdown-1.7345376"
    },
    {
      label: "EVENT PRODUCTION",
      sublabel: "PluggedIn 2024",
      asset: "https://cdn.sanity.io/images/6y8p05bp/production/c82d04429fe53712f4286bb0733e666be3f496dd-1280x853.png",
      type: "image",
      url: "https://www.soplugged.com/blog/pluggedin-2024-recap"
    },
    {
      label: "SPEAKING / HOSTING",
      sublabel: "ISWIS Toronto Live Show",
      asset: "/images/iswis-live.jpg",
      type: "image",
      url: "https://www.instagram.com/p/DM8TXyhMtWE/?hl=en"
    }
  ];

  const collaborators = [
    {
      name: "CBC",
      logo: "https://www.cbc.ca/a/assets/logo_cbc-radio-canada.svg",
    },
    {
      name: "ISWIS Podcast",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEVHcEz/3hb7rDDwSEnvQnPvR3jvSWvvQnPvQnPvQnP5oDb5oDbvQnPxVVLvQ2j5oDbvQnPvRkrvQnP5oDf5oDb5oDb6oTP5oDb5oDbvSDbvSDbvSDbvSDbvSDbvSDbvSDbvSDbvSDbvSDbvRzPgjcDgjb/5oDb5oDb5oDYjPltlAAAAKXRSTlMA1TELcFsi/4zDq/TuFDCAsEXURLb/JOZsVf/H3nKlkoT26LmQ/1eY0qQi7uUAAAFfSURBVHgBpdKHgqowFEXRM6RcEANECJIrdUrg/7/wZRRe77OVuuiAj/T09BtMYoCQChoxQSrNUomjUw7IjEiBSONsMirS7MCyhCCZVRCKLC7ISEsqDqyBiqiCLc7pAxWlOzbxnEWVUppm1QUk7nse6OKeRGctzyRJk8rIVsdh22sHY1SWotCmMICKGfwxzzfB7Ln3bG8MMA+eY+Nd+YYbFzzYyfobzMCjnYdpGBCLgpHFoi0zP8Ob/hkQHo8GNhP7Gd5bPWKaXlhADztanuN5PTyLmdHHc8f5cUfB7BceIw4LG2bLL+hZ7GoETByEQZyNM1rdl/e0AdrOYF/x+oavIhnNuSvCKaBe27quv+ClQLmV1xKda5A4ONde2wMzA5O7PKArc7QbnEOTf4UITePavHMiWd/x5JIdzwWCc2XXueBC2DE8LH4iqM261WFN1tCc3nFzCX5S2WHbyq3DR/oEbHIapdcRmXUAAAAASUVORK5CYII=",
    },
    {
      name: "Black Founders Network",
      logo: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2023/10/BFN_Colour-Signature-Lock-Up-digital-1024x182.png",
    },
    {
      name: "SOPLUGGED",
      logo: "https://www.soplugged.com/logos/soplugged_black.svg",
    },
    {
      name: "Pesa",
      logo: "https://cdn.prod.website-files.com/6475bdbcb7f3f096d3ebe43e/64b3ed71f1050d27156d2350_PesaLogo.svg",
    }
  ];

  return (
    <section className="bg-[#FAFAF9]">
      {/* Works Gallery */}
      <div className="py-32 md:py-48 px-6 md:px-12 border-b border-[#1C1917]/10 max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal">
          <p className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: '#D93025' }}>
            SELECTED WORKS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target={project.url.startsWith('http') ? "_blank" : "_self"}
              rel={project.url.startsWith('http') ? "noopener noreferrer" : ""}
              className="flex flex-col space-y-6 reveal interactive group cursor-none"
            >
              <div className="aspect-[4/3] overflow-hidden grayscale bg-stone-200 relative">
                {project.type === 'video' ? (
                  <video
                    src={project.asset}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <img
                    src={project.asset}
                    alt={project.label}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1C1917] mb-1 group-hover:text-[#D93025] transition-colors">
                  {project.label}
                </p>
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1917]/40">
                  {project.sublabel}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Partners Scrolling Ticker Section */}
      <div className="bg-[#1C1917] py-12 md:py-16 border-y border-[#1C1917] overflow-hidden reveal">
        <div className="flex animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {collaborators.map((partner, index) => (
                <LogoItem
                  key={index}
                  name={partner.name}
                  logo={partner.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
