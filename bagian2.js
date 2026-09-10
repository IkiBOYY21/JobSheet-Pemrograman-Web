const products = [
  { id: 1, title: "Laptop", price: 1000, stock: 5 },
  { id: 2, title: "Phone", price: 800, stock: 15 },
  { id: 3, title: "Mouse", price: 20, stock: 3 }
];

console.log("=== BAGIAN 2 ===");

// 2.1 Cari produk berdasar ID
const product = products.find(p => p.id === 2);
console.log("2.1 Cari ID 2:", product);

// 2.2 Filter stok < 10
const lowStock = products.filter(p => p.stock < 10);
console.log("2.2 Stok < 10:", lowStock);

// 2.3 Update stok (Immutability)
const updatedProducts = products.map(p => 
  p.id === 1 ? { ...p, stock: 20 } : p
);
console.log("2.3 Data Baru (ID 1 Stok 20):", updatedProducts);