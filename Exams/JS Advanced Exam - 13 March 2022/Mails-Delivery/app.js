function solve() {
    document.getElementById('add').addEventListener('click', addToList);
    document.getElementById('reset').addEventListener('click', reset);

    let mailObj = {
        recipient: '',
        title: '',
        message: ''
    }

    let mailRecepient = document.getElementById('recipientName');
    let mailTitle = document.getElementById('title');
    let mailMessage = document.getElementById('message');

    function addToList(e) {
        e.preventDefault();

        if (mailRecepient.value !== '' && mailTitle.value !== '' && mailMessage.value !== '') {

            mailObj.recipient = mailRecepient;// this is an element not a value!!!
            mailObj.title = mailTitle;
            mailObj.message = mailMessage;

            let ul = document.getElementById('list');

            // Creating the new elements
            let li = document.createElement('li');
            let firstH4 = document.createElement('h4');
            let secondH4 = document.createElement('h4');
            let span = document.createElement('span');
            let div = document.createElement('div');
            let sendBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            // Seeting elements values and classes
            sendBtn.setAttribute('type', 'submit');
            sendBtn.setAttribute('id', 'send');
            sendBtn.textContent = 'Send';

            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.setAttribute('id', 'delete');
            deleteBtn.textContent = 'Delete';

            div.setAttribute('id', 'list-action');

            span.textContent = mailObj.message.value;

            secondH4.textContent = `Recipient Name: ${mailObj.recipient.value}`;

            firstH4.textContent = `Title: ${mailObj.title.value}`;

            // Adding all elements to their parents
            div.appendChild(sendBtn);
            div.appendChild(deleteBtn);

            li.appendChild(firstH4);
            li.appendChild(secondH4);
            li.appendChild(span);
            li.appendChild(div);

            ul.appendChild(li);

            // Adding button event listeners
            sendBtn.addEventListener('click', sendMail);
            deleteBtn.addEventListener('click', deleteMail);

            for (const [k, v] of Object.entries(mailObj)) {
                v.value = '';
            }
        }

    }

    function reset(e) {
        e.preventDefault();
       
        mailRecepient.value = '';
        mailTitle.value = '';
        mailMessage.value = '';
    }

    function sendMail(e) {
        let liItem = this.parentElement.parentElement;
        let recipientInfo = liItem.children[0].textContent;
        let titleInfo = liItem.children[1].textContent;

        // Creating new li items
        let newLi = document.createElement('li');
        let newSpanOne = document.createElement('span');
        let newSpanTwo = document.createElement('span');
        let newDiv = document.createElement('div');
        let newBtn = document.createElement('button');

        // Setting the new items values
        newSpanOne.textContent = recipientInfo;
        newSpanTwo.textContent = titleInfo;

        newDiv.classList.add('btn');

        newBtn.setAttribute('type', 'submit');
        newBtn.classList.add('delete');
        newBtn.textContent = 'Delete';
        newBtn.addEventListener('click', deleteMail);

        // Adding elements to the main li
        newLi.appendChild(newSpanOne);
        newLi.appendChild(newSpanTwo);
        newLi.appendChild(newDiv);

        newDiv.appendChild(newBtn);

        // Appending the whole li to the new destination form
        document.querySelector('ul.sent-list').appendChild(newLi);

        e.target.parentElement.parentElement.remove()
    }

    function deleteMail(e) {
        if (e.target.hasAttribute('id')) {
            let recipientName = e.target.parentElement.parentElement.children[0].textContent;
            let titleText = e.target.parentElement.parentElement.children[1].textContent;

            let newLi = document.createElement('li');
            let newSpanOne = document.createElement('span');
            let newSpanTwo = document.createElement('span');

            newSpanOne.textContent = recipientName;
            newSpanTwo.textContent = titleText;

            newLi.appendChild(newSpanOne);
            newLi.appendChild(newSpanTwo);

            document.querySelector('ul.delete-list').appendChild(newLi);

        } else {
            let deletedMailElm = this.parentElement.parentElement.cloneNode(true);
            let btnDiv = deletedMailElm.querySelector('div');
            btnDiv.remove();
            document.querySelector('ul.delete-list').appendChild(deletedMailElm);
        }

        this.parentElement.parentElement.remove();
    }

    debugger;
}
solve()