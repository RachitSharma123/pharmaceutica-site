import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Pill } from 'lucide-react';
import medicationsCatalog from '../medications_data.json';
import { productsConfig } from '../config';

interface MedicationEntry {
  id: string;
  range: string;
  category: string;
  name: string;
  form: string;
  composition: string;
  packing: string;
}

interface MedicationFamily {
  id: string;
  name: string;
  categories: string[];
  ranges: string[];
  forms: string[];
  compositions: string[];
  packings: string[];
  variants: MedicationEntry[];
}

type CatalogJson = Record<
  string,
  Record<string, Array<{ name: string; form: string; composition: string; packing: string }>>
>;

const catalogData = medicationsCatalog as CatalogJson;

const normalizeMedicationName = (name: string): string => {
  const stripped = name
    .replace(/\b\d+(?:\.\d+)?\s*(?:mg|mcg|g|ml|iu|%)(?:\/[\d.]+\s*(?:mg|mcg|g|ml))?\b/gi, ' ')
    .replace(/\b(?:tablet|tablets|capsule|capsules|suspension|syrup|cream|ointment|gel|drops|lotion|shampoo|sachet|dry syrup|solution|chewable|sr|er|dt)\b/gi, ' ')
    .replace(/[+/,()-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return stripped.length > 0 ? stripped : name;
};

const uniqueValues = (values: string[]) => [...new Set(values.filter(Boolean))];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const medications = useMemo<MedicationEntry[]>(() => {
    return Object.entries(catalogData).flatMap(([range, categories]) =>
      Object.entries(categories).flatMap(([category, items]) =>
        items.map((item, index) => ({
          id: `${range}-${category}-${item.name}-${index}`,
          range,
          category,
          name: item.name,
          form: item.form,
          composition: item.composition,
          packing: item.packing,
        }))
      )
    );
  }, []);

  const categories = useMemo(
    () => ['All', ...new Set(medications.map((item) => item.category))],
    [medications]
  );

  const medicationFamilies = useMemo<MedicationFamily[]>(() => {
    const familyMap = new Map<string, MedicationEntry[]>();

    medications.forEach((medication) => {
      const key = normalizeMedicationName(medication.name).toLowerCase();
      const existing = familyMap.get(key) ?? [];
      existing.push(medication);
      familyMap.set(key, existing);
    });

    return Array.from(familyMap.entries())
      .map(([key, variants]) => ({
        id: key,
        name: normalizeMedicationName(variants[0].name),
        categories: uniqueValues(variants.map((item) => item.category)),
        ranges: uniqueValues(variants.map((item) => item.range)),
        forms: uniqueValues(variants.map((item) => item.form)),
        compositions: uniqueValues(variants.map((item) => item.composition)),
        packings: uniqueValues(variants.map((item) => item.packing)),
        variants,
      }))
      .sort((a, b) => b.variants.length - a.variants.length || a.name.localeCompare(b.name));
  }, [medications]);

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

  useEffect(() => {
    setVisibleCount(9);
  }, [activeCategory, searchTerm]);

  const filteredFamilies = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return medicationFamilies.filter((family) => {
      const matchesCategory =
        activeCategory === 'All' || family.categories.some((category) => category === activeCategory);
      const matchesSearch =
        query.length === 0 ||
        family.name.toLowerCase().includes(query) ||
        family.variants.some(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.composition.toLowerCase().includes(query) ||
            item.form.toLowerCase().includes(query) ||
            item.packing.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, medicationFamilies, searchTerm]);

  const displayedFamilies = filteredFamilies.slice(0, visibleCount);

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
            Browse {medications.length}+ SKUs grouped into {medicationFamilies.length} medicine families across{' '}
            {categories.length - 1} therapeutic categories.
          </p>
        </div>

        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '550ms' }}
        >
          <div className="max-w-xl mx-auto">
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search medicine family, composition, dosage or pack..."
              className="w-full px-4 py-3 border border-[#ececec] rounded-none text-sm focus:outline-none focus:border-[#7b4397]"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs md:text-sm tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#7b4397] text-white'
                  : 'bg-[#fafafa] text-[#696969] hover:bg-[#f0f0f0]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedFamilies.map((family, index) => (
            <article
              key={family.id}
              className={`bg-[#fafafa] border border-[#f0f0f0] p-6 transition-all duration-700 hover:border-[#d7c4e3] hover:shadow-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${700 + index * 40}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#7b4397] mb-1">
                    {family.categories.slice(0, 2).join(' • ')}
                    {family.categories.length > 2 ? ' +' : ''}
                  </p>
                  <h3 className="font-serif text-xl leading-tight text-black">{family.name}</h3>
                </div>
                <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-white border border-[#ececec] text-[#555]">
                  <Pill size={13} />
                  {family.variants.length} variants
                </span>
              </div>

              <p className="text-sm text-[#666] min-h-[56px]">{family.compositions[0]}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {family.variants.slice(0, 4).map((variant) => (
                  <span key={variant.id} className="text-[11px] px-2.5 py-1 bg-white border border-[#ececec] text-[#666]">
                    {variant.name} • {variant.packing}
                  </span>
                ))}
                {family.variants.length > 4 && (
                  <span className="text-[11px] px-2.5 py-1 bg-[#f4ebfa] text-[#7b4397] border border-[#e8d8f1]">
                    +{family.variants.length - 4} more variants
                  </span>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-[#ececec] flex items-center justify-between gap-3">
                <p className="text-xs text-[#666]">Forms: {family.forms.join(', ')}</p>
                <p className="text-xs text-[#9a9a9a]">{family.ranges.join(' • ')}</p>
              </div>
            </article>
          ))}
        </div>

        {filteredFamilies.length === 0 && (
          <div className="text-center mt-10 text-[#696969]">No medicines found for this filter.</div>
        )}

        {visibleCount < filteredFamilies.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((current) => current + 9)}
              className="px-8 py-3 border border-[#7b4397] text-[#7b4397] inline-flex items-center gap-2 hover:bg-[#7b4397] hover:text-white transition-all duration-300"
            >
              Show More
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
