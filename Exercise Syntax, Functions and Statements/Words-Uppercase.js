"use strict"

function wordsUppercase(inputString){
    const pattern = /\w+/g;
    let arr = inputString.match(pattern);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }

    let result = arr.join(', ');
    console.log(result);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
wordsUppercase('FUNCTIONS, IN, JS, CAN, BE, NESTED, I, , , E, HOLD, OTHER, FUNCTIONS');
