function fruit(fruit, weight, peicePerKg){
    let weightInKg = weight/1000;
    let money = weightInKg*peicePerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('apple', 1563, 2.35);