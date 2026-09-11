// Sample data dari DummyJSON 
const products = [
  { id: 6, title: "Calvin Klein CK One", price: 49.99, rating: 4.37 },
  { id: 7, title: "Chanel Coco Noir Eau De", price: 129.99, rating: 4.26 },
  { id: 8, title: "Dior J'adore", price: 89.99, rating: 3.8 }
];

// 8.1 Bubble Sort manual 
function bubbleSort(numbers) {
  let arr = [...numbers]; 
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("8.1 Bubble Sort:", bubbleSort([5, 1, 4, 2, 8]));

// 8.2 Sort produk dengan bawaan JS 
function sortProducts(products, sortBy) {
  let arr = [...products];
  
  if (sortBy === "price-asc") {
    return arr.sort((a, b) => a.price - b.price); // Murah ke mahal
  } else if (sortBy === "price-desc") {
    return arr.sort((a, b) => b.price - a.price); // Mahal ke murah
  } else if (sortBy === "rating") {
    return arr.sort((a, b) => b.rating - a.rating); // Rating tertinggi
  } else if (sortBy === "title") {
    return arr.sort((a, b) => a.title.localeCompare(b.title)); // Abjad
  }
  return arr;
}
console.log("8.2 Sort produk (harga termurah):", sortProducts(products, "price-asc"));