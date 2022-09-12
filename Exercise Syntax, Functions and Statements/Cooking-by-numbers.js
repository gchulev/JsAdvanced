function cookingByNumbers(number, operation1, operation2, operation3, operation4, operation5) {
    number = Number(number);
    const operationsList = [operation1, operation2, operation3, operation4, operation5];
    operationsList.forEach(operation => {
        switch (operation) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number = number + 1;
                break;
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number = number - (number * 0.2);
                break;
            default:
                break;
        }
        console.log(number);
    });
}

cookingByNumbers(9, 'dice', 'spice', 'chop', 'bake', 'fillet');
