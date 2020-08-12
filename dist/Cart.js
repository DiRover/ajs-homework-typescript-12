export default class Cart {
    constructor() {
        this.items = []; //создаём класс применяя интерфейс
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
    sumPrice() {
        const result = this.items.reduce((sum, current) => sum + current.price, 0);
        return result;
    }
    sumDiscount(discount) {
        let sum = 0;
        for (const movie of this.items) {
            sum += movie.price;
        }
        return sum * (100 - discount) / 100;
    }
    deleteItem(itemId) {
        this.items = this.items.filter((item) => item.id !== itemId); //возвращаем новый массив
    }
}
// для отладки
//const cart = new Cart();
//cart.add(avengers)
//cart.add(wolf)
//cart.deleteItem(23)
// console.log(cart.getAll())
//console.log(cart.sumPrice());
//# sourceMappingURL=Cart.js.map