function calculator() {
    let outputObj = {init, add, subtract};
    let firstNumInput;
    let secondNumInput; 
    let resultArea;

    function init(arg1, arg2, resultElm) {
        firstNumInput = document.querySelector(arg1)
        secondNumInput = document.querySelector(arg2)
        resultArea = document.querySelector(resultElm);
    }

    function add() {
        let num1 = Number(firstNumInput.value);
        let num2 = Number(secondNumInput.value);
        resultArea.value = num1 + num2;
    }

    function subtract() {
        let num1 = Number(firstNumInput.value);
        let num2 = Number(secondNumInput.value);
        resultArea.value = num1 - num2;
    }
    return outputObj;
}


let calculate = calculator()
calculate.init ('#num1', '#num2', '#result')

