// Latihan 1.1 — Menghitung Harga Setelah Diskon

function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

// Latihan 1.2 — Menaikkan Tingkat Kesulitan (Apply Discounts ke Array)
const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cartItems) {
  const result = [];

  for (const item of cartItems) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);

    // Push object hasil ke array result
    result.push({
      title: item.title,
      originalPrice: item.price,
      discountPercent: item.discountPercent,
      finalPrice: finalPrice
    });
  }

  return result;
}

console.log("=== Pengerjaan Bagian 1 ===");

// Uji Latihan 1.1

const hargaLaptop = 1000;
const diskonLaptop = 10;
console.log(
  `Latihan 1.1 - Harga $${hargaLaptop} diskon ${diskonLaptop}%:`,
  calculateDiscountedPrice(hargaLaptop, diskonLaptop)
);

// Uji Latihan 1.2
console.log("Latihan 1.2 - Hasil perhitungan diskon keranjang:");
console.table(applyDiscounts(cart));