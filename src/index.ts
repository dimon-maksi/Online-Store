import { addToCart, calculateTotal, CartItem } from "./cart";
import { filterByPrice, findProduct } from "./product";
import { Book, Clothing, Electronics } from "./types";

const electronics: Electronics[] = [
    {
        id: 1,
        name: "Телефон",
        price: 10000,
        category: 'electronics',
        warranty: '1 рік'
    },
    {
        id: 2,
        name: "Ноутбук",
        price: 25000,
        category: 'electronics',
        warranty: '2 роки'
    },
    {
        id: 3,
        name: "Телевізор",
        price: 15000,
        category: 'electronics',
        warranty: '1 рік'
    }
];

const clothing: Clothing[] = [
    {
        id: 4,
        name: "Футболка",
        price: 500,
        category: 'clothing',
        size: 'M'
    },
    {
        id: 5,
        name: "Куртка",
        price: 3000,
        category: 'clothing',
        size: 'L'
    },
    {
        id: 6,
        name: "Джинси",
        price: 2000,
        category: 'clothing',
        size: 'XL'
    }
];

const books: Book[] = [
    {
        id: 7,
        name: "Великий Гетсбі",
        price: 200,
        category: 'book',
        author: 'Френсіс Скотт Фіцджеральд'
    },
    {
        id: 8,
        name: "1984",
        price: 150,
        category: 'book',
        author: 'Джордж Орвелл'
    },
    {
        id: 9,
        name: "Гаррі Поттер і філософський камінь",
        price: 300,
        category: 'book',
        author: 'Дж. К. Ролінг'
    }
];

const foundProduct = findProduct(electronics, 2);
console.log("Знайдений товар:", foundProduct);

// Фільтрація товарів за ціною
const affordableElectronics = filterByPrice(electronics, 15000);
console.log("Електроніка до 15000:", affordableElectronics);

// Робота з кошиком
let cart: CartItem<Electronics | Clothing | Book>[] = [];
cart = addToCart(cart, electronics[0], 1);
cart = addToCart(cart, clothing[1], 2);
cart = addToCart(cart, books[2], 1);

console.log("Кошик:", cart);
console.log("Загальна вартість кошика:", calculateTotal(cart));