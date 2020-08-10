/* eslint-disable spaced-comment */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-restricted-syntax */
import Buyable from './Buyable';

export default class Cart {
  items: Buyable[] = []; //создаём класс применяя интерфейс

  add(item: Buyable): void {
    this.items.push(item);
  }

  getAll(): Buyable[] {
    return [...this.items];
  }

  sumPrice(): number {
    let sum: number = 0;
    for (const movie of this.items) {
      sum += movie.price;
    }
    return sum;
  }

  sumDiscount(discount: number): number {
    let sum: number = 0;
    for (const movie of this.items) {
      sum += movie.price;
    }
    return sum * (100 - discount) / 100;
  }

  deleteItem(itemId: number): void {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].id === itemId) {
        this.items.splice(i, 1);
      }
    }
  }
}

// для отладки
// const cart = new Cart();
// cart.add(avengers)
// cart.add(wolf)
// cart.deleteItem(23)
// console.log(cart.getAll())
