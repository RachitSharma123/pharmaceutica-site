import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { qualityConfig } from '../config';

const Quality = () => {
  if (!qualityConfig.heading || qualityConfig.certifications.length === 0) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-[#7b4397] font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {qualityConfig.tag}
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {qualityConfig.heading}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-[#696969] text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {qualityConfig.description}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityConfig.certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative p-8 bg-[#fafafa] border border-[#f0f0f0] hover:border-[#7b4397]/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <Award 
                  size={40} 
                  strokeWidth={1.2} 
                  className="text-[#7b4397]"
                />
              </div>

              {/* Certification Code */}
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={16} className="text-[#7b4397]" />
                <span className="text-sm font-medium text-[#7b4397] tracking-wide">
                  {cert.code}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-serif text-xl text-black mb-4 leading-tight">
                {cert.name}
              </h3>

              {/* Description */}
              <p className="text-[#696969] text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#7b4397] to-[#dc2430] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <p className="text-[#696969] text-lg max-w-3xl mx-auto">
            Every certification represents our unwavering commitment to excellence. 
            From raw material sourcing to final product delivery, we maintain the 
            highest standards at every step of the manufacturing process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
