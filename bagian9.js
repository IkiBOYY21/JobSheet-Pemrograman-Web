const products = [
  { id: 1, title: "Laptop", category: "electronics", price: 1200 },
  { id: 2, title: "Smartphone", category: "electronics", price: 800 },
  { id: 3, title: "Lipstick", category: "beauty", price: 20 },
  { id: 4, title: "Apple", category: "groceries", price: 5 }
];

// 9.1 Grouping produk berdasarkan kategori
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

const groupedProducts = groupByCategory(products);
console.log(groupedProducts);

// 9.2 Ringkasan jumlah produk per kategori
function summarizeCategories(groupedData) {
  const summary = [];
  for (const category in groupedData) {
    summary.push({
      Kategori: category,
      JumlahProduk: groupedData[category].length
    });
  }
  console.table(summary);
}

summarizeCategories(groupedProducts);