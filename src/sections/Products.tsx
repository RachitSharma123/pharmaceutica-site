import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Pill } from 'lucide-react';
import medicationsCatalog from '../medications_data.json';
import { productsConfig } from '../config';
import { categorySummaries, medications } from '../data/medications';

const Products = () => {
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

  const openCategoryCatalog = (category: string) => {
    const url = new URL(`${window.location.origin}${import.meta.env.BASE_URL}medications`);
    url.searchParams.set('category', category);
    window.location.href = url.toString();
  };

  return (
    <section id="products" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
        <div className="text-center mb-12">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-[#7b4397] font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {productsConfig.tag}
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {productsConfig.heading}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-[#696969] text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Browse {categorySummaries.length} therapeutic categories and {medications.length}+ medicines. Click any
            category to open the full medication page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categorySummaries.map((entry, index) => (
            <article
              key={entry.category}
              className={`bg-[#fafafa] border border-[#f0f0f0] p-6 transition-all duration-700 hover:border-[#d7c4e3] hover:shadow-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${700 + index * 40}ms` }}
            >
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#7b4397] mb-1">Category</p>
              <h3 className="font-serif text-2xl leading-tight text-black">{entry.category}</h3>
              <p className="text-sm text-[#666] mt-2 mb-4">{entry.count} medicines available</p>

              <div className="space-y-2 mb-6">
                {entry.previewMeds.map((medicine) => (
                  <p key={medicine.id} className="text-sm text-[#565656] border-b border-[#ececec] pb-1">
                    {medicine.name}
                  </p>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openCategoryCatalog(entry.category)}
                className="px-5 py-2.5 border border-[#7b4397] text-[#7b4397] inline-flex items-center gap-2 hover:bg-[#7b4397] hover:text-white transition-all duration-300"
              >
                View {entry.category}
                <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
