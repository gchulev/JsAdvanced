'use strict';

function rectangle(width, height, color){

    let colorUpperCase = color.substring(0, 1).toUpperCase() + color.substring(1);
    let rectnagleObj = {
        width: `${Number(width)}`,
        height: `${Number(height)}`,
        color: `${colorUpperCase}`,
        calcArea: () => width * height
    }

    return rectnagleObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
