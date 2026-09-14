const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);

// 16.1 Membandingkan langkah Linear Search vs Binary Search
function linearSearchSteps(arr, target) {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps++;
    if (arr[i] === target) return steps;
  }
  return steps;
}

function binarySearchSteps(arr, target) {
  let steps = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return steps;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return steps;
}

console.log("Langkah Linear Search:", linearSearchSteps(largeArray, 9999));
console.log("Langkah Binary Search:", binarySearchSteps(largeArray, 9999));

// 16.2 Perbandingan O(n²) nested loop vs O(n) Map/Object grouping
// Nested loop (1000 x 1000 = 1.000.000 iterasi) vs Map (1000 iterasi)