function solve() {
  let exerceseDiv = document.getElementById('exercise');

  exerceseDiv.getElementsByTagName('button')[0].addEventListener('click', addFurniture);
  exerceseDiv.getElementsByTagName('button')[1].addEventListener('click', buyFurniture);
  let table = document.getElementsByClassName('table')[0];

  function addFurniture() {
    let textAreaGenerate = exerceseDiv.getElementsByTagName('textarea')[0];

    let inputObject = JSON.parse(textAreaGenerate.value);


    for (const item of inputObject) {
      let newRow = document.createElement('tr');

      let imgTag = document.createElement('img');
      imgTag.setAttribute('src', item.img);

      let nameP = document.createElement('p');
      nameP.textContent = item.name;

      let priceP = document.createElement('p');
      priceP.textContent = item.price;

      let decorationFactor = document.createElement('p');
      decorationFactor.textContent = item.decFactor;

      let markInput = document.createElement('input');
      markInput.setAttribute('type', 'checkbox');

      let newItemsArray = [imgTag, nameP, priceP, decorationFactor, markInput];

      for (const arrItem of newItemsArray) {
        let newTableData = document.createElement('td');
        newTableData.appendChild(arrItem);
        newRow.appendChild(newTableData);
      }
      table.tBodies[0].appendChild(newRow);
    }
  }

  function buyFurniture() {
    let tableRows = Array.from(table.tBodies[0].children);
    let resultArray = [];
    
    for (const tr of tableRows) {
      let currentFurniture = {};

      if (tr.querySelector('input[type="checkbox"]:checked')){
        let elmData = tr.querySelectorAll('td');

        currentFurniture = {
          name: elmData[1].children[0].textContent,
          price: elmData[2].children[0].textContent,
          decorFactor: elmData[3].children[0].textContent
        }
        console.log(currentFurniture);
        resultArray.push(currentFurniture);
      }
    }
    let boughtFurniture = '';
    let totalPrice = 0;
    let decFactor = 0;

    for (const obj of resultArray) {
      boughtFurniture += obj.name + ', ';
      totalPrice += Number(obj.price);
      decFactor += Number(obj.decorFactor);
    }

    let avgDecFactor = decFactor / resultArray.length;
    let idxToRemove = boughtFurniture.lastIndexOf(', ');
    boughtFurniture = boughtFurniture.substring(0, idxToRemove);
    let resultToPrint = `Bought furniture: ${boughtFurniture}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`
    document.querySelector('textarea[disabled]').textContent = resultToPrint;
  }
}