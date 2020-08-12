/* eslint-disable max-len */
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
    const result: number = this.items.reduce((sum: number, current: Buyable) => sum + current.price, 0);
    return result;
  }

  sumDiscount(discount: number): number {
    let sum: number = 0;
    for (const movie of this.items) {
      sum += movie.price;
    }
    return sum * (100 - discount) / 100;
  }

  deleteItem(itemId: number): void {
    this.items = this.items.filter((item: Buyable) => item.id !== itemId); //возвращаем новый массив
  }
}

// для отладки
//const cart = new Cart();
//cart.add(avengers)
//cart.add(wolf)
//cart.deleteItem(23)
// console.log(cart.getAll())
//console.log(cart.sumPrice());
