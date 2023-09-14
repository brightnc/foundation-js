const prices = [20, 30, 55, 90];

prices.forEach((price, idx) => {
  console.log(idx, price);
});

const newPrices = prices.map((price) => {
  return price * 1.1;
});

console.log("new prices >>> ", newPrices);

const premiumPrices = newPrices.filter((price) => {
  return price > 30;
});

console.log("premium prices >>> ", premiumPrices);

const sumPrice = newPrices.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});

console.log("sum price >>> ", sumPrice);
