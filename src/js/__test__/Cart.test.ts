import Cart from '../Cart';

type Item = {
  id: number,
  name: string,
  price: number,
  year: number,
  country: string,
  slogan: string,
  genre: string,
  time: number
};

const avengers: Item = {
  id: 12,
  name: 'Мстители',
  price: 1000,
  year: 2012,
  country: 'USA',
  slogan: 'Avengers Assamble',
  genre: 'action',
  time: 2,
};

const wolf: Item = {
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

test('add new items', () => {
  const expected = [{
    id: 12,
    name: 'Мстители',
    price: 1000,
    year: 2012,
    country: 'USA',
    slogan: 'Avengers Assamble',
    genre: 'action',
    time: 2,
  },
  {
    id: 23,
    name: 'Волк с Вол Стрит',
    price: 2000,
    year: 2014,
    country: 'USA',
    slogan: 'Money doesn\'t smell',
    genre: 'comedy biografy',
    time: 2,
  }];
  expect(cart.getAll()).toEqual(expected);
});

test('check total sum', () => {
  const expected = 3000;
  expect(cart.sumPrice()).toBe(expected);
});

test('check total sum with discount', () => {
  const expected = 2400;
  expect(cart.sumDiscount(20)).toBe(expected);
});

test('check delete item', () => {
  cart.deleteItem(23);
  const expected = [{
    id: 12,
    name: 'Мстители',
    price: 1000,
    year: 2012,
    country: 'USA',
    slogan: 'Avengers Assamble',
    genre: 'action',
    time: 2,
  }];
  expect(cart.getAll()).toEqual(expected);
});
