function sales(carsSold) {
  const results = new Map();
  for (let car of carsSold) {
    const { make: brand, price } = car;
    if (results.has(brand)) {
      const acc = results.get(brand);
      results.set(brand, acc + price);
    } else {
      results.set(brand, price);
    }
  }
  const sorted = Array.from(results).sort((a, b) => a[0].localeCompare(b[0]));
  return Object.fromEntries(sorted);
}

module.exports = sales;
