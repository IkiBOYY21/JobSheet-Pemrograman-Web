// 17.1 render produk ke DOM
export function renderProducts(products) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";
  
  for (const product of products) {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>Kategori: ${product.category}</p>
      <p>Harga: $${product.price}</p>
    `;
    container.appendChild(card);
  }
}

// 25.1 Statistics (Render ke UI)
export function renderStatistics(stats) {
  const container = document.querySelector("#statistics");
  if (!stats) {
    container.innerHTML = "Tidak ada produk ditemukan.";
    return;
  }
  container.innerHTML = `Total Produk: ${stats.totalProducts} | Rata-rata Harga: $${stats.averagePrice.toFixed(2)}`;
}