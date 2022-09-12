function gdc(firstNum, secondNum){

    let greatestCommonDivisor = 0;
    const firstNumArray = [];
    const secondNumArray = [];

    for (let i = 1; i <= firstNum; i++) {

        if (firstNum % i === 0) {
            firstNumArray.push(i);
        }
    }

    for (let i = 1; i <= secondNum; i++) {
        if (secondNum % i === 0) {
            secondNumArray.push(i);
        }
    }
    
    secondNumArray.forEach(element => {
        firstNumArray.forEach(secondElement => {
            if (element === secondElement) {
                greatestCommonDivisor = element;
            }
        });
    });

    console.log(greatestCommonDivisor);
}

gdc(2154, 458);