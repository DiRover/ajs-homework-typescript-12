/* eslint-disable max-len */
import Buyable from './Buyable';

export default class Movie implements Buyable {
  id: number;

  // eslint-disable-next-line spaced-comment
  name: string; //объявляю сразу тут и в конструторе, по другому выдаёт ошибку

  price: number;

  year: number;

  country: string;

  slogan: string;

  genre: string;

  time: number;

  constructor(id: number, name: string, price: number, year: number, country: string, slogan: string, genre: string, time: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.time = time;
  }
}
