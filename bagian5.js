// Menggunakan beberapa sample dari data DummyJSON asli
const products = [
  { id: 1, title: "Essence Mascara Lash Princess", category: "beauty", price: 9.99, rating: 2.56, stock: 99 },
  { id: 16, title: "Apple", category: "groceries", price: 1.99, rating: 4.19, stock: 8 },
  { id: 17, title: "Beef Steak", category: "groceries", price: 12.99, rating: 4.47, stock: 86 }
];

// 5.1 Menghitung rata-rata harga barang "groceries"
const groceriesPrices = products
  .filter(p => p.category === "groceries")
  .map(p => p.price);

const avgGroceries = groceriesPrices.reduce((a, b) => a + b, 0) / groceriesPrices.length;
console.log("5.1 Rata-rata harga groceries:", avgGroceries);

// 5.2 Mengambil statistik seluruh produk
function getStatistics(products) {
  const totalProducts = products.length;
  const prices = products.map(p => p.price);
  
  const averagePrice = prices.reduce((a, b) => a + b, 0) / totalProducts;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const averageRating = products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;

  return { totalProducts, averagePrice, highestPrice, lowestPrice, totalStock, averageRating };
}
console.log("5.2 Statistik produk:", getStatistics(products));  