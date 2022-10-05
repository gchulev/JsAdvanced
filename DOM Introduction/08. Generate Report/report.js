function generateReport() {
    let tblRows = document.querySelectorAll('tbody tr');
    let hdr = document.querySelectorAll('table thead tr th input');
    let rowsArray = [];

    for (let rowIndex = 0; rowIndex < tblRows.length; rowIndex++) {

        let currentObj = {};
        for (let colIndex = 0; colIndex < hdr.length; colIndex++) {
            let isChecked = hdr[colIndex].checked;

            if (isChecked) {
                let currentCellData = tblRows[rowIndex].children[colIndex].textContent;
                let currentHeader = hdr[colIndex].name;
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