// 25.3 Product Search (Partial Search)
export function partialSearch(products, keyword) {
  const lower = keyword.toLowerCase();
  return products.filter(p => p.title.toLowerCase().includes(lower));
}

// 8.2 Function sortProducts
export function sortProducts(products, sortBy) {
  if (sortBy === "price-asc") {
    return [...products].sort((a, b) => a.price - b.price);
  }
  if (sortBy === "price-desc") {
    return [...products].sort((a, b) => b.price - a.price);
  }
  return products;
}

// 20.1 Refactor getStatistics menggunakan destructuring
export function getStatistics(products) {
  const totalProducts = products?.length ?? 0;
  if (totalProducts === 0) return null;

  const stats = products.reduce((acc, product) => {
    const { price = 0 } = product;
    acc.totalPrice += price;
    return acc;
  }, { totalPrice: 0 });

  return {
    totalProducts,
    averagePrice: stats.totalPrice / totalProducts
  };
}