window.addEventListener('load', solve);

function solve() {
    document.querySelector('button[type="submit"]').addEventListener('click', submitInfo);

    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');

    document.querySelector('button[class="clear-btn"').addEventListener('click', function () {
        Array.from(this.parentNode.querySelectorAll('div')).map(elm => elm.remove());
    });

    function submitInfo(event) {
        event.preventDefault();

        if (description.value !== '' && clientName.value !== '' && clientPhone.value !== '') {

            let destinationElm = document.getElementById('received-orders');

            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let startRepairBtn = document.createElement('button');
            let finishRepairBtn = document.createElement('button');

            div.classList.add('container');
            h2.textContent = `Product type for repair: ${productType.value}`;
            h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;
            h4.textContent = `Description of the problem: ${description.value}`;

            startRepairBtn.classList.add('start-btn');
            startRepairBtn.textContent = 'Start repair';
            startRepairBtn.addEventListener('click', disableEnableFinishBtn);

            finishRepairBtn.classList.add('finish-btn');
            finishRepairBtn.textContent = 'Finish repair';
            finishRepairBtn.addEventListener('click', finishRepair);

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(h4);
            div.appendChild(startRepairBtn);
            div.appendChild(finishRepairBtn);
            destinationElm.appendChild(div);

            finishRepairBtn.disabled = true;

            description.value = '';
            clientPhone.value = '';
            clientName.value = '';
        }
    }

    function disableEnableFinishBtn() {
        let btn = this.parentElement.querySelector('button.finish-btn');
        if (btn.disabled) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }

        this.disabled = true;
    }

    function finishRepair() {
        let parentDiv = this.parentElement;
        let newDiv = parentDiv.cloneNode(true);
        let divArrr = Array.from(newDiv.querySelectorAll('button'));

        for (const elm of divArrr) {
            elm.remove();
        }

        let finishedOrdersElm = document.getElementById('completed-orders');
        finishedOrdersElm.appendChild(newDiv);
        parentDiv.remove();
    }
}