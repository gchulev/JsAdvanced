function solve() {
    document.getElementById('add-worker').addEventListener('click', addWorker);

    let firstNameElm = document.getElementById('fname');
    let lastNameElm  = document.getElementById('lname');
    let emailElm = document.getElementById('email');
    let dateOfBirthElm = document.getElementById('birth');
    let positionElm = document.getElementById('position');
    let salaryElm  = document.getElementById('salary');
    let budgetMessageElm = document.getElementById('sum');

    let budget = 0;

    function addWorker(evt){
        evt.preventDefault();

        if (firstNameElm.value !== '' &&
            lastNameElm.value !== '' && 
            emailElm.value !== '' &&
            dateOfBirthElm.value !== '' &&
            positionElm.value !== '' &&
            salaryElm.value !== '') {
            
            let tr = document.createElement('tr');
            
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');
            let td6 = document.createElement('td');
            let td7 = document.createElement('td');

            let firedBtn = document.createElement('button');
            firedBtn.classList.add('fired');
            firedBtn.textContent = 'Fired';
            firedBtn.addEventListener('click', fireWorker);

            let editBtn = document.createElement('button');
            editBtn.classList.add('edit');
            editBtn.textContent = 'Edit'
            editBtn.addEventListener('click', editData);

            // Assigning values to table data
            td1.textContent = firstNameElm.value;
            td2.textContent = lastNameElm.value;
            td3.textContent = emailElm.value;
            td4.textContent = dateOfBirthElm.value;
            td5.textContent = positionElm.value;
            td6.textContent = salaryElm.value;

            // Appending elements to their parents
            td7.appendChild(firedBtn);
            td7.appendChild(editBtn);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            
            document.getElementById('tbody').appendChild(tr);
            budget += Number(salaryElm.value);
            budgetMessageElm.textContent = budget.toFixed(2);
            
            firstNameElm.value = '';
            lastNameElm.value = '';
            emailElm.value = '';
            dateOfBirthElm.value = '';
            positionElm.value = '';
            salaryElm.value = '';

        }

        function editData(evt) {
            let tableData = Array.from(this.parentElement.parentElement.cells);

            firstNameElm.value = tableData[0].textContent;
            lastNameElm.value = tableData[1].textContent;
            emailElm.value = tableData[2].textContent;
            dateOfBirthElm.value = tableData[3].textContent;
            positionElm.value = tableData[4].textContent;
            salaryElm.value = tableData[5].textContent;

            budget -= Number(tableData[5].textContent);
            budgetMessageElm.textContent = budget.toFixed(2);

            this.parentElement.parentElement.remove();
        }

        function fireWorker(evt) {
            let tableData = Array.from(this.parentElement.parentElement.cells);

            budget -= Number(tableData[5].textContent);
            budgetMessageElm.textContent = budget.toFixed(2);

            this.parentElement.parentElement.remove();
        }
    }
}
solve()