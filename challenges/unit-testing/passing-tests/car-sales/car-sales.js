function sales(carsSold) {
  const results = new Map();
  for (let car of carsSold){
    const {make:brand, price } = car;
    if(results.has(brand)){
      const acc = results.get(brand);
      console.log("price already set", acc);
      results.set(brand, acc + price);

    }
    else{results.set(brand, price)}
  }
  console.log(results);
}

let carsSold = [
    { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
    { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
    { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
    { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
    { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
    { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
    { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
  ];

  sales(carsSold);

module.exports = sales;
