// Sample data dari DummyJSON 
const products = [
  { id: 11, title: "Annibale Colombo Bed", category: "furniture", price: 1899.99 },
  { id: 12, title: "Annibale Colombo Sofa", category: "furniture", price: 2499.99 }
];

// 6.1 Mencari index 
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
console.log("6.1 Linear Search (cari angka 8):", linearSearch([1, 5, 8, 10], 8));

// 6.2 Cari produk dari ID-nya
function findProductById(products, targetId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === targetId) return products[i];
  }
  return null;
}
console.log("6.2 Cari produk ID 12:", findProductById(products, 12));