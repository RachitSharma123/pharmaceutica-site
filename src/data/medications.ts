import medicationsCatalog from '../medications_data.json';

export interface MedicationEntry {
  id: string;
  range: string;
  category: string;
  name: string;
  form: string;
  composition: string;
  packing: string;
}

interface CatalogItem {
  name: string;
  form: string;
  composition: string;
  packing: string;
}

type CatalogJson = Record<string, Record<string, CatalogItem[]>>;

const catalogData = medicationsCatalog as CatalogJson;

export const medications: MedicationEntry[] = Object.entries(catalogData).flatMap(([range, categories]) =>
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

export const medicationCategories = ['All', ...new Set(medications.map((item) => item.category))];

export const categorySummaries = medicationCategories
  .filter((category) => category !== 'All')
  .map((category) => {
    const categoryMeds = medications.filter((item) => item.category === category);
    return {
      category,
      count: categoryMeds.length,
      previewMeds: categoryMeds.slice(0, 3),
    };
  })
  .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
