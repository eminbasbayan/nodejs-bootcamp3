const PizzaShop = require("./pizza-shop.js");
const DrinkMachine = require("./drink-machine.js");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Sipariş alındı: ${size} pizza, ${topping} ile.`);
  drinkMachine.serveDrink(size);
});

pizzaShop.displayOrderNumber();
pizzaShop.order("large", "peynir");
pizzaShop.order("small", "sucuk");
pizzaShop.displayOrderNumber();