"use strict";

function listOfNames(inputArray) {
    inputArray.sort((firstString, secondString) => {
        if (firstString.toLowerCase() < secondString.toLowerCase()) {
            return -1;
        }else if (firstString.toLowerCase() > secondString.toLowerCase()) {
            return 1;
        }else{
            return 0;
        }
    });

    for (let i = 0; i < inputArray.length; i++) {
        console.log(`${i + 1}.${inputArray[i]}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
listOfNames(["Tom", "John", "Bob", "christina", "Ema", "Mike", "Frank", "Angel", "Will"]);
listOfNames([]);