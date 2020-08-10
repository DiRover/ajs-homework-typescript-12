export default class Cart {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  getAll() {
    return [...this.items];
  }

  sumPrice() {
    let sum = 0;
    for (const movie of this.items) {
      sum += movie.price;
    }
    return sum;
  }

  sumDiscount(discount) {
    let sum = 0;
    for (const movie of this.items) {
      sum += movie.price;
    }
    return sum * (100 - discount) / 100;
  }

  deleteItem(itemId) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === itemId) {
        this.items.splice(i, 1);
      }
    }
  }
}
const avengers = {
  id: 12,
  name: 'Мстители',
  price: 1000,
  year: 2012,
  country: 'USA',
  slogan: 'Avengers Assamble',
  genre: 'action',
  time: 2,
};
const wolf = {
  id: 23,
  name: 'Волк с Вол Стрит',
  price: 2000,
  year: 2014,
  country: 'USA',
  slogan: 'Money doesn\'t smell',
  genre: 'comedy biografy',
  time: 2,
};
const cart = new Cart();
cart.add(avengers);
cart.add(wolf);
cart.deleteItem(23);
console.log(cart.getAll());
// # sourceMappingURL=Cart.js.map
