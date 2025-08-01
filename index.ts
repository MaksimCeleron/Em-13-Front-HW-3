import promptSync from 'prompt-sync';
const prompt = promptSync();
import products from './products.json';

type Product = {
  id:number,
  name:string,
  description:string,
  category:string,
  price:number,
  quantity:number,
  discount:number,
  reviewCount:number
}

// 1 level
// map
// 1
const productslist: Product[] = products;

const names = products.map((product, i) => {
  return product.name;
});

console.log('Імена товарів:', names);
prompt();

// 2
type ProductInfo = {
  name: string,
  price: number
}

const productInfos: ProductInfo[] = products.map((product, i) => {
  return {
    name: product.name,
    price: product.price
  }
})

console.log('Імена та ціна товарів:', productInfos);
prompt();

// filter
// 3
const biggerThan20 = products.filter(product => product.quantity >= 20);

console.log('Товари, кількість яких більше 20:', biggerThan20);
prompt();

// 4
const biggerThan100 = products.filter(product => product.price >= 100);

console.log('Товари дорожче 100:', biggerThan100)
prompt();

// 5
const categoryElectronics = products.filter(product => product.category == "Electronics");

console.log('Товари в категорії електроніки:', categoryElectronics);
prompt();

// 6
const price50WithDiscount = products.filter(product => product.price * (1 - product.discount / 100) >= 50);

console.log('Товари дорожче 50 з дисконтом:', price50WithDiscount);
prompt();

// reduce
// 7
const allPrices = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log('Вартість всіх товарів:', allPrices);
prompt();

// 8
const allPrices1 = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);
const averagePrice = products.length > 0 ? allPrices / products.length : 0;

console.log('Середня ціна всіх товарів:', averagePrice.toFixed(2));
prompt()

// 2 level
// 9
let minPrice: number = Number.MAX_SAFE_INTEGER;
let minPriceProduct: Product;
let maxPrice = 0;
let maxPriceProduct: Product;

products.forEach(product => {
    if (product.price < minPrice)
    {
        minPrice = product.price;
        minPriceProduct = product;
    }
    if (product.price > maxPrice)
    {
        maxPrice = product.price;
        maxPriceProduct = product;
    }
});

console.log('Найдешевший товар:', minPriceProduct);
console.log('Найдорожчий товар:', maxPriceProduct);
prompt();

// 10
const allPricesWithDiscount = products.reduce((sum, product) => {
    return sum + (product.price * product.quantity) * (1 - product.discount / 100);
}, 0);

console.log('Загальна вартість всіх товарів з урахуванням дисконту:', allPricesWithDiscount.toFixed(2));
prompt();

// 11
const noAvialable = products.filter(product => product.quantity == 0);

if (noAvialable.length != 0)
{
    console.log('Товари, яких немає в наявності:', noAvialable);
} else {
    console.log('Всі товари є в наявності.');
}
prompt();

// 12
const allReviews = products.reduce((sum, product) => {
    return sum + product.reviewCount;
}, 0);

console.log('Загальна кількість відгуків:', allReviews);
prompt();

// 3 level
// 13
let allCategories = [];

products.forEach(product => {
    if (!allCategories.includes(product.category))
    {
        allCategories.push(product.category);
    }
});

console.log('Унікальні категорії товарів:', allCategories);
prompt();

// 14
let maxDescLength: number = 0;
let maxDescProduct: Product;

products.forEach(product => {
    if (product.description.length > maxDescLength)
    {
        maxDescLength = product.description.length;
        maxDescProduct = product;
    }
});

console.log('Товар з найбільшим описом:', maxDescProduct);
prompt();

// 15
products.push({
  id: products[products.length - 1].id + 1,
  name: "QuantumHub",
  description: "7-port USB 3.2 hub with RGB lighting and aluminum body.",
  category: "Electronics",
  price: 999.00,
  quantity: 25,
  discount: 10,
  reviewCount: 137
});

console.log('Новий товар:', products[products.length - 1]);