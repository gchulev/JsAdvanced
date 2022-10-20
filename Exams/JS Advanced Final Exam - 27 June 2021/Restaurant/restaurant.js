'use strict';

class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (const product of products) {
            let productName = product.split(' ')[0];
            let productQuantity = Number(product.split(' ')[1]);
            let productTotalPrice = Number(product.split(' ')[2]);

            if (productTotalPrice <= this.budgetMoney) {

                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = productQuantity
                    this.budgetMoney -= productTotalPrice;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                } else {

                    this.stockProducts[productName] += productQuantity;
                    this.budgetMoney -= productTotalPrice;
    
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                }

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.history.join('\n').trimEnd();
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            let products = {};

            for (const prod of neededProducts) {
                let productName = prod.split(' ')[0];
                let neededQuantity = Number(prod.split(' ')[1]);

                products[productName] = neededQuantity;
            }
            this.menu[meal] = { products, price }

            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else if (Object.keys(this.menu).length === 0 || Object.keys(this.menu).length >= 2){

                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        let result = '';
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        for (const [k, v] of Object.entries(this.menu)) {
            result += `${k} - $ ${v.price}\n`
        }
        return result.trimEnd();
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
         return `There is not ${meal} yet in our menu, do you want to order something else?`;       
        }

        for (const [prodName, prodValue] of Object.entries(this.menu[meal].products)) {
            if (!this.stockProducts.hasOwnProperty(prodName) || this.menu[meal].products[prodName] > this.stockProducts[prodName]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
            this.stockProducts[prodName] -= prodValue;
        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}



// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.addToMenu('yogurtCream', ['Yogurt 2', 'Honey 2', 'Banana 4', 'Strawberries 10'], 4.40));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.makeTheOrder('yogurtCream'));
console.log(kitchen.showTheMenu());
