function stringLength(firstParam, secondParam, thirdParam){
    let sumOfLengths = firstParam.length + secondParam.length + thirdParam.length;
    console.log(sumOfLengths);
    console.log(Math.floor(sumOfLengths / 3));
}

stringLength('pasta', '5', '22.3')