// Sample data dari DummyJSON (Data HARUS diurutkan berdasarkan harga dari murah ke mahal)
const sortedProducts = [
  { id: 26, title: "Green Chili Pepper", price: 0.99, category: "groceries" },
  { id: 25, title: "Green Bell Pepper", price: 1.29, category: "groceries" },
  { id: 16, title: "Apple", price: 1.99, category: "groceries" }
];

// 7.1 Binary Search dasar 
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log("7.1 Binary Search (cari angka 10):", binarySearch([1, 5, 8, 10, 20], 10));

// 7.2 Binary search produk berdasarkan harga
function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (sortedProducts[mid].price === targetPrice) return sortedProducts[mid];
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
  return null;
}
console.log("7.2 Cari produk harga 1.29:", binarySearchByPrice(sortedProducts, 1.29));