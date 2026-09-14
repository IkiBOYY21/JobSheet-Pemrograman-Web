// 13.1 Class Stack
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// 13.2 Undo search history menggunakan Stack
const searchHistory = new Stack();
searchHistory.push("laptop");
searchHistory.push("phone");

console.log("Terakhir dicari:", searchHistory.peek());
console.log("Undo pencarian:", searchHistory.pop());
console.log("Pencarian saat ini:", searchHistory.peek());