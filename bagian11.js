const products = [
  { id: 1, category: "electronics", brand: "Apple", tags: ["tech", "office"] },
  { id: 2, category: "electronics", brand: "Samsung", tags: ["tech", "mobile"] },
  { id: 3, category: "fashion", brand: "Zara", tags: ["clothing"] }
];

// 11.1 Unique category, unique brand, dan unique tags
const uniqueCategories = [...new Set(products.map(p => p.category))];
const uniqueBrands = [...new Set(products.map(p => p.brand))];
const uniqueTags = [...new Set(products.flatMap(p => p.tags))];

console.log(uniqueCategories);
console.log(uniqueBrands);
console.log(uniqueTags);