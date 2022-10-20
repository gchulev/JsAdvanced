window.addEventListener('load', solve);

function solve() {
    document.getElementById('add').addEventListener('click', addToStore);

    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    let totalProfit = 0;

    function addToStore(evt) {
        evt.preventDefault();

        if (model.value != '' && description.value !== '' && year.value >= 0 && price.value >= 0) {
            let trOne = document.createElement('tr');
            let trTwo = document.createElement('tr');
            let trOneTdOne = document.createElement('td');
            let trOneTdTwo = document.createElement('td');
            let trOneTdThree = document.createElement('td');
            let moreInfoBtn = document.createElement('button');
            let buyItBtn = document.createElement('button');
            let trTwoTdOne = document.createElement('td');
            let trTwoTdTwo = document.createElement('td');

            // Assigning attributes to the elements and appending them to parents
            trOne.classList.add('info');
            trOne.appendChild(trOneTdOne);
            trOne.appendChild(trOneTdTwo);
            trOne.appendChild(trOneTdThree);

            trOneTdThree.appendChild(moreInfoBtn);
            trOneTdThree.appendChild(buyItBtn);

            trTwo.classList.add('hide');
            trTwo.appendChild(trTwoTdOne);
            trTwo.appendChild(trTwoTdTwo);
            trTwoTdTwo.setAttribute('colspan', '3');

            moreInfoBtn.classList.add('moreBtn');
            moreInfoBtn.addEventListener('click', moreInfo);

            buyItBtn.classList.add('buyBtn');
            buyItBtn.addEventListener('click', buyFurniture);

            // Assigning values to the elements

            trOneTdOne.textContent = model.value;
            trOneTdTwo.textContent = Number(price.value).toFixed(2);

            moreInfoBtn.textContent = 'More Info';
            buyItBtn.textContent = 'Buy it';

            trTwoTdOne.textContent = `Year: ${year.value}`;
            trTwoTdTwo.textContent = `Description: ${description.value}`;

            let tableElm = document.getElementById('furniture-list');

            tableElm.appendChild(trOne);
            tableElm.appendChild(trTwo);

            model.value = '';
            year.value = '';
            description.value = '';
            price.value = '';

        }
    }

    function moreInfo(evt) {
        let hiddenTr = this.parentElement.parentElement.parentElement.getElementsByClassName('hide')[0];

        if (this.textContent === 'More Info') {
            hiddenTr.style.display = 'contents';
            this.textContent = 'Less Info';
        } else if (this.textContent === 'Less Info') {
            hiddenTr.style.display = 'none';
            this.textContent = 'More Info';
        }
        
    }

    function buyFurniture(evt) {
        let elmToRemove = this.parentElement.parentElement;
        let secondElmToRemove = elmToRemove.parentElement.getElementsByClassName('hide')[0];

        totalProfit += Number(elmToRemove.children[1].textContent);

        let totalElm = document.querySelector('td[class="total-price"]');
        totalElm.textContent = totalProfit.toFixed(2);

        secondElmToRemove.remove();
        elmToRemove.remove();
    }
}
