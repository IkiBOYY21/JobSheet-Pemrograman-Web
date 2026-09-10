const products = [
  { id: 1, title: "Laptop Pro", price: 1200, rating: 4.8, stock: 5, category: "laptops" },
  { id: 2, title: "Smartphone X", price: 800, rating: 4.2, stock: 15, category: "phones" },
  { id: 3, title: "Headphones Wireless", price: 100, rating: 4.0, stock: 3, category: "audio" },
  { id: 4, title: "Mechanical Keyboard", price: 150, rating: 4.7, stock: 8, category: "accessories" },
  { id: 5, title: "Gaming Mouse", price: 50, rating: 4.5, stock: 20, category: "accessories" }
];

export function runBagian2() {
  console.log("\n=== BAGIAN 2: DATA REPRESENTATION & ARRAY OF OBJECTS ===");

  // Latihan 2.1 — Mencari Produk Berdasarkan ID
  function findProductById(productList, id) {
    return productList.find((p) => p.id === id);
  }
  console.log("Latihan 2.1 - Cari Produk ID 2:", findProductById(products, 2));

  // Latihan 2.2 — Filter Stok Menipis (< 10)
  const lowStockProducts = products.filter((p) => p.stock < 10);
  console.log("Latihan 2.2 - Produk dengan Stok < 10:", lowStockProducts);

  // Latihan 2.3 — Mengubah Data Tanpa Mutasi (Immutability)
  function updateStock(productList, id, newStock) {
    return productList.map((p) =>
      p.id === id ? { ...p, stock: newStock } : p
    );
  }
  const updatedProducts = updateStock(products, 1, 99);
  
  console.log("Latihan 2.3 - Stok Asli Produk ID 1 (Tetap):", products[0].stock);
  console.log("Latihan 2.3 - Stok Baru Produk ID 1 (Updated):", updatedProducts[0].stock);
}