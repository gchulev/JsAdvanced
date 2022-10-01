function solve() {
    document.querySelectorAll('select#selectMenuTo option')[0].remove();

    let binaryElm = document.createElement('option');
    binaryElm.textContent = 'Binary';
    binaryElm.setAttribute('value', 'binary');

    let hexadecimalElm = document.createElement('option');
    hexadecimalElm.textContent = 'Hexadecimal';
    hexadecimalElm.setAttribute('value', 'hexadecimal');

    let menuElement = document.getElementById('selectMenuTo');
    menuElement.appendChild(binaryElm);
    menuElement.appendChild(hexadecimalElm);

    document.querySelector('div#container button').addEventListener('click', convert);

    function convert() {
        let selectedElm = Array.from(document.querySelector('select#selectMenuTo').getElementsByTagName('option')).find(elm => elm.selected === true);
        let valueToConvert = Number(document.getElementById('input').value);
        let convertedValue = '';

        if (selectedElm.value === 'binary') {
            convertedValue = valueToConvert.toString(2);
        } else if (selectedElm.value === 'hexadecimal') {
            convertedValue = valueToConvert.toString(16).toUpperCase();
        }

        document.getElementById('result').value = convertedValue;
    }
}