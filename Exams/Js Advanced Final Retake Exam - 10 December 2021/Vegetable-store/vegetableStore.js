'use strict';

class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.totalPrice = 0;
    }

    loadingVegetables(vegetables) {
        for (const item of vegetables) {
            let type = item.split(' ')[0];
            let quantity = Number(item.split(' ')[1]);
            let price = Number(item.split(' ')[2]);

            if (!this.availableProducts.some(elm => elm.type === type)) {
                this.availableProducts.push({ type, quantity, price });
            } else {
                let foundVegetable = this.availableProducts.find(v => v.type === type);
                foundVegetable.quantity += quantity;

                if (price > foundVegetable.price) {
                    foundVegetable.price = price;
                }
            }
        }

        return `Successfully added ${this.availableProducts.map(e => e.type).join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        this.totalPrice = 0;
        for (const product of selectedProducts) {
            let type = product.split(' ')[0];
            let quantity = Number(product.split(' ')[1])
            let currentBill = 0;

            if (!this.availableProducts.find(p => p.type === type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${this.totalPrice.toFixed(2)}.`);
            } else {

                let foundProduct = this.availableProducts.find(p => p.type === type);
                if (quantity > foundProduct.quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${this.totalPrice.toFixed(2)}.`);
                }
                currentBill = quantity * foundProduct.price;
                this.totalPrice += currentBill;
                foundProduct.quantity -= quantity;
            }
        }
        return `Great choice! You must pay the following amount $${this.totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let foundProduct = this.availableProducts.find(p => p.type === type);

        if (!foundProduct) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > foundProduct.quantity) {
            foundProduct.quantity = 0;
            return `The entire quantity of the ${foundProduct.type} has been removed.`;
        }

        foundProduct.quantity -= quantity;
        return `Some quantity of the ${foundProduct.type} has been removed.`;
    }

    revision() {
        let sortedProducts = this.availableProducts.sort((x, y) => x.price - y.price);
        let result = `Available vegetables:\n`;

        for (const product of sortedProducts) {
            result += `${product.type}-${product.quantity}-$${product.price}\n`;
        }
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`

        return result.trimEnd();
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
//  console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
//  console.log(vegStore.buyingVegetables(["Okra 1"]));
//  console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
//  console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

