function addItem() {
    let btn = document.querySelector('input[type=button], [value=add]');

    let firstItem = document.querySelector('input#newItemText').value;
    let secondItem = document.querySelector('input#newItemValue').value;

    let select = document.getElementById('menu');
    let option = document.createElement('option');

    option.textContent = firstItem;
    option.value = secondItem;

    select.appendChild(option);

    document.querySelector('input#newItemText').value = '';
    document.querySelector('input#newItemValue').value = '';

    // debugger;
}