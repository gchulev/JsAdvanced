window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish').addEventListener('click', submitInfo);

  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuelType = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let totalProfit = 0;

  let carObj = {
    make,
    model,
    year,
    fuelType,
    originalCost,
    sellingPrice
  }

  function submitInfo(e) {
    e.preventDefault();

    if (make.value !== '' && model.value !== '' && year.value !== '' && fuelType.value !== '' && originalCost.value !== '' && sellingPrice.value !== '' && (Number(sellingPrice.value) > Number(originalCost.value))) {

      let tr = document.createElement('tr');

      for (const [key, element] of Object.entries(carObj)) {
        let td = document.createElement('td');
        td.textContent = element.value;
        tr.appendChild(td);
      }

      let editBtn = document.createElement('button');
      editBtn.classList.add('action-btn');
      editBtn.classList.add('edit');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', editData);

      let sellBtn = document.createElement('button');
      sellBtn.classList.add('action-btn');
      sellBtn.classList.add('sell');
      sellBtn.textContent = 'Sell';
      sellBtn.addEventListener('click', sellCar);

      tr.appendChild(editBtn);
      tr.appendChild(sellBtn);

      let tableBody = document.getElementById('table-body');
      tableBody.appendChild(tr);

      for (const [propName, element] of Object.entries(carObj)) {
        element.value = '';
      }
    }
  }
  function editData(e) {
    
    let rowData = this.parentElement.cells;
    let carObjArr = Object.entries(carObj);

    for (let i = 0; i < rowData.length; i++) {
      carObjArr[i][1].value = rowData[i].textContent;
    }
    this.parentElement.remove();
  }

  function sellCar(e) {
    let soldCar = {
      makeAndModel: this.parentElement.cells[0].textContent + ' ' + this.parentElement.cells[1].textContent,
      productionYear: this.parentElement.cells[2].textContent,
      profitMade: Number(this.parentElement.cells[5].textContent) - Number(this.parentElement.cells[4].textContent)
    };

    let carsListElm = document.getElementById('cars-list');
    let li = document.createElement('li');
    li.classList.add('each-list');

    for (const [propName, propValue] of Object.entries(soldCar)) {
      let span = document.createElement('span');
      span.textContent = propValue;
      li.appendChild(span);
    }
    carsListElm.appendChild(li);
    this.parentElement.remove();

    totalProfit += Number(soldCar.profitMade);
    document.getElementById('profit').textContent = totalProfit.toFixed(2);
  }
}
