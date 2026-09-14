// 10.1 Count frequency umum
function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

// 10.2 Frekuensi kategori, tags, dan rating pada data produk
const products = [
  { id: 1, category: "electronics", rating: 4.5, tags: ["tech", "office"] },
  { id: 2, category: "electronics", rating: 4.2, tags: ["tech", "mobile"] },
  { id: 3, category: "beauty", rating: 3.9, tags: ["skincare"] }
];

console.log(countFrequency(products.map(p => p.category)));
console.log(countFrequency(products.flatMap(p => p.tags)));
console.log(countFrequency(products.map(p => Math.round(p.rating))));