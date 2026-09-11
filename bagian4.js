const products = [
  {
    title: "Laptop",
    tags: ["elektronik", "kantor"],
    reviews: [{ comment: "Mantap" }, { comment: "Bagus" }]
  },
  {
    title: "Phone",
    tags: ["elektronik", "gadget"],
    reviews: [{ comment: "Keren" }]
  }
];

function runBagian4() {
  console.log("=== BAGIAN 4 ===");

  // 4.1 Meratakan array tags pake flatMap
  const allTags = products.flatMap(p => p.tags);
  console.log("4.1 Flat Tags:", allTags);

  // 4.2 Meratakan semua comment review
  const allComments = products.flatMap(p => p.reviews.map(r => r.comment));
  console.log("4.2 Flat Comments:", allComments);
}

runBagian4();