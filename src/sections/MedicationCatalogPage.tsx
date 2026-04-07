import { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { medicationCategories, medications } from '../data/medications';

const getInitialCategory = () => {
  const params = new URLSearchParams(window.location.search);
  const rawCategory = params.get('category') ?? 'All';

  return medicationCategories.includes(rawCategory) ? rawCategory : 'All';
};

const MedicationCatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState(getInitialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeds = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return medications.filter((item) => {
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
      const searchMatch =
        query.length === 0 ||
        item.name.toLowerCase().includes(query) ||
        item.composition.toLowerCase().includes(query) ||
        item.form.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  const updateCategory = (category: string) => {
    setActiveCategory(category);
    const params = new URLSearchParams(window.location.search);

    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    const nextQuery = params.toString();
    const nextPath = nextQuery.length > 0 ? `${window.location.pathname}?${nextQuery}` : window.location.pathname;
    window.history.replaceState(null, '', nextPath);
  };

  const goHome = () => {
    window.location.href = `${import.meta.env.BASE_URL}#products`;
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
        <button
          type="button"
          onClick={goHome}
          className="mb-6 inline-flex items-center gap-2 text-sm text-[#7b4397] hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <h1 className="font-serif text-4xl md:text-5xl text-black">Medication Catalog</h1>
        <p className="text-[#666] mt-3 mb-8">
          Showing {filteredMeds.length} medicines {activeCategory === 'All' ? 'across all categories' : `in ${activeCategory}`}.
        </p>

        <div className="mb-6">
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search medicine name, composition, or form..."
            className="w-full max-w-xl px-4 py-3 border border-[#ececec] text-sm focus:outline-none focus:border-[#7b4397]"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {medicationCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => updateCategory(category)}
              className={`px-4 py-2 text-xs md:text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-[#7b4397] text-white'
                  : 'bg-[#f7f7f7] text-[#666] hover:bg-[#efefef]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
          {filteredMeds.map((medicine) => (
            <article key={medicine.id} className="border border-[#ececec] bg-[#fafafa] p-5">
              <p className="text-xs uppercase tracking-wide text-[#7b4397] mb-1">{medicine.category}</p>
              <h2 className="font-serif text-xl text-black">{medicine.name}</h2>
              <p className="text-sm text-[#666] mt-2">{medicine.composition}</p>
              <div className="mt-4 pt-3 border-t border-[#ececec] text-xs text-[#666] space-y-1">
                <p>Form: {medicine.form}</p>
                <p>Packing: {medicine.packing}</p>
                <p>Range: {medicine.range}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MedicationCatalogPage;
