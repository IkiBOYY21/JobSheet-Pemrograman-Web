const products = [
  { id: 101, title: "Laptop gaming", price: 1500 },
  { id: 102, title: "Mouse Wireless", price: 25 }
];

// 12.1 Product lookup berdasarkan ID menggunakan Map
function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

const productLookup = buildProductLookup(products);
console.log(productLookup.get(102));