function generateReport() {
    let table = document.getElementsByTagName('table')[0];
    let rowsArray = [];

    for (let rowIndex = 1; rowIndex < table.rows.length; rowIndex++) {

        let currentObj = {};
        for (let colIndex = 0; colIndex < table.rows[0].children.length; colIndex++) {
            let isChecked = table.rows[0].children[colIndex].children[0].checked;

            if (isChecked) {
                let currentCellData = table.rows[rowIndex].children[colIndex].innerText.trim();
                let currentHeader = table.rows[0].children[colIndex].innerText.trim();
                currentObj[currentHeader] = currentCellData;
            }
        }
        
        rowsArray.push(currentObj);
    }
    let resultJSON = JSON.stringify(rowsArray, null, 2);
    // console.log(resultJSON)
    document.getElementById('output').textContent = resultJSON;
    // debugger;
}