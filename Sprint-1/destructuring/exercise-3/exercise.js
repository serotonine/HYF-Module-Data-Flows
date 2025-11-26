let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
const setPrice = (pricePence) => (pricePence / 100).toFixed(2)
let total = 0;
console.log(`${("QTY").padEnd(7)}${"ITEM".padEnd( 20)}TOTAL`);
for (let item of order){
  const {itemName, quantity, unitPricePence} = item;
  const sousTotal = (quantity * unitPricePence);
  total += sousTotal;
  console.log(`${(quantity+"").padEnd(7)}${itemName.padEnd(20)}${setPrice(sousTotal)}`);
}
console.log(`\n${("TOTAL").padEnd(26)}${setPrice(total)}`);
