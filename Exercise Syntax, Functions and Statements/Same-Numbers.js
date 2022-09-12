function sameNumbers(number){
    let sumString = String(number);
    let flag = true;
    let sum = sumString.length > 0 ? Number(sumString[0]) : 0;

    for (let i = 0; i < sumString.length - 1; i++) {
        const element = Number(sumString[i]);
        const nextElement = Number(sumString[i + 1]);
        
        if (element !== nextElement) {
            flag = false;
        }
        sum += nextElement;
    }
    console.log(flag)
    console.log(sum)
}

sameNumbers(01234);
sameNumbers(2222222);