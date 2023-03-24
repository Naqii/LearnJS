import {coffeeStock as stock, isCoffeeMachineReady} from './state.js';

console.log(stock);
console.log(isCoffeeMachineReady);


/*
ES6 Module
const displayStock = coffeeStock => {
    for (const type in coffeeStock) {
        console.log(type);
    }
}
displayStock(coffeeStock);

format CommonJS
const {coffeeStock, isCoffeeMachineReady} = require('./state');
const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
makeCoffee("robusta", 80);
*/
