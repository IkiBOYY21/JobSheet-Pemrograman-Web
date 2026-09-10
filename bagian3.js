const products = [
  {
    id: 1,
    title: "Laptop",
    tags: ["elektronik", "kantor"],
    reviews: [
      { rating: 5, comment: "Mantap" },
      { rating: 4, comment: "Oke" }
    ]
  },
  {
    id: 2,
    title: "Phone",
    tags: ["elektronik", "gadget"],
    reviews: [
      { rating: 5, comment: "Bagus banget" }
    ]
  }
];

function runBagian3() {
  console.log("=== BAGIAN 3 ===");

  console.log("3.1 All Tags:", products.map(p => p.tags));

  const gadgetProducts = products.filter(p => p.tags.includes("gadget"));
  console.log("3.2 Produk Tag Gadget:", gadgetProducts);

  const totalReviews = products.map(p => ({
    title: p.title,
    reviewCount: p.reviews.length
  }));
  console.log("3.3 Jumlah Review:", totalReviews);
  const star5 = [];
  products.forEach(p => {
    p.reviews.forEach(r => {
      if (r.rating === 5) star5.push(r);
    });
  });
  console.log("3.4 Review Bintang 5:", star5);

  const avgRatings = products.map(p => {
    const total = p.reviews.reduce((sum, r) => sum + r.rating, 0);
    return { title: p.title, avgRating: total / p.reviews.length };
  });
  console.log("3.5 Rata-rata Rating:", avgRatings);
  const mostReviewed = products.reduce((max, p) => 
    p.reviews.length > max.reviews.length ? p : max
  );
  console.log("3.6 Review Terbanyak:", mostReviewed.title);

  const ratings = products.flatMap(p => p.reviews.map(r => r.rating));
  console.log("3.7 Semua Rating:", ratings);
}

runBagian3();