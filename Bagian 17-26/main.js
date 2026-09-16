// 21 ES Modules (Import semua file)
import { state } from "./state.js";
import { fetchProducts } from "./api.js";
import { renderProducts, renderStatistics } from "./ui.js";
import { partialSearch, sortProducts, getStatistics } from "./algorithms.js";

// 18.1 Function render (Merakit alur data)
function render() {
  if (state.status === "loading") {
    document.querySelector("#product-list").innerHTML = "<p>Loading data...</p>";
    return;
  }

  // Filter Kategori
  let filtered = state.category === "all" 
    ? state.products 
    : state.products.filter(p => p.category === state.category);

  // Search & Sort dari algorithms.js
  filtered = partialSearch(filtered, state.search);
  filtered = sortProducts(filtered, state.sortBy);

  // Tampilkan statistik
  const stats = getStatistics(filtered);
  renderStatistics(stats);

  // Tampilkan produk
  renderProducts(filtered);
}

// 19.1 Event Handling
document.querySelector("#search-input").addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

document.querySelector("#category-select").addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});

document.querySelector("#sort-select").addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});

// 26.1 Gabungkan menjadi aplikasi utuh (Initial Load)
async function loadApp() {
  try {
    state.status = "loading";
    render();
    
    // Ambil data dari API
    state.products = await fetchProducts();
    state.status = "success";
  } catch (error) {
    state.status = "error";
  } finally {
    render();
  }
}

loadApp();