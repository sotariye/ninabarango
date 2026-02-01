
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-[#FAFAF9] py-32 md:py-64 px-6 md:px-12 border-b border-[#1C1917]/10">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-xl md:text-4xl lg:text-5xl leading-tight md:leading-[1.1] font-light text-[#1C1917] tracking-tight mb-12">
          My journey started with a simple goal: helping businesses get seen. But I quickly learned that for creators and entrepreneurs, the real challenge isn't just being noticed—it’s being ready for what comes next. Now, I specialize in the "what comes next."
        </p>
        <p className="reveal text-xl md:text-4xl lg:text-5xl leading-tight md:leading-[1.1] font-light text-[#1C1917] tracking-tight">
          By bridging the gap between culture, capital, and community, I build the infrastructure that helps brands scale into new territories and founders stay focused on what they do best.
        </p>
      </div>
    </section>
  );
};

export default About;
