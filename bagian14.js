// 14.1 Class Queue
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const requestQueue = new Queue();
requestQueue.enqueue("Fetch Product 1");
requestQueue.enqueue("Fetch Product 2");

console.log("Antrean pertama diproses:", requestQueue.dequeue());