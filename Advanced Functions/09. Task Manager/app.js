function solve() {
    document.getElementById('add').addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        let taskInputvalue = document.getElementById('task').value.trim();
        let descriptionInputValue = document.getElementById('description').value.trim();
        let dueDateValue = document.getElementById('date').value.trim();

        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';

        if (taskInputvalue !== '' && descriptionInputValue !== '' && dueDateValue !== '') {
            let emptyOrangeDiv = document.querySelector('div h1.orange').parentNode.parentElement.children[1];
            let articleElm = document.createElement('article');
            let h3Elm = document.createElement('h3');
            let firstPElm = document.createElement('p');
            let secondPElm = document.createElement('p');
            let innerDivElm = document.createElement('div');
            let firstBtn = document.createElement('button');
            let secondBtn = document.createElement('button');

            h3Elm.textContent = taskInputvalue;
            firstPElm.textContent = 'Description: ' + descriptionInputValue;
            secondPElm.textContent = 'Due Date: ' + dueDateValue;

            firstBtn.classList.add('green');
            firstBtn.addEventListener('click', startTask);
            firstBtn.textContent = 'Start';
            secondBtn.classList.add('red');
            secondBtn.addEventListener('click', removeTask);
            secondBtn.textContent = 'Delete';

            articleElm.appendChild(h3Elm);
            articleElm.appendChild(firstPElm);
            articleElm.appendChild(secondPElm);
            articleElm.appendChild(innerDivElm);

            innerDivElm.classList.add('flex');
            innerDivElm.appendChild(firstBtn);
            innerDivElm.appendChild(secondBtn);

            emptyOrangeDiv.appendChild(articleElm);
        }
    }

    function startTask(e) {
        let currentArticle = e.target.parentElement.parentElement;
        let targetDiv = document.getElementById('in-progress');
        targetDiv.appendChild(currentArticle);

        currentArticle.querySelectorAll('div button')[0].className = 'red';
        currentArticle.querySelectorAll('div button')[1].className = 'orange';

        currentArticle.querySelectorAll('div button')[0].textContent = 'Delete';
        currentArticle.querySelectorAll('div button')[0].removeEventListener('click', startTask);
        currentArticle.querySelectorAll('div button')[0].addEventListener('click', removeTask);

        currentArticle.querySelectorAll('div button')[1].textContent = 'Finish';
        currentArticle.querySelectorAll('div button')[1].removeEventListener('click', removeTask);
        currentArticle.querySelectorAll('div button')[1].addEventListener('click', finishTask);
    }

    function removeTask(e) {
        let currentArticle = e.target.parentElement.parentElement;
        currentArticle.remove();
    }

    function finishTask(e){
        let targetArticle = e.target.parentElement.parentElement;
        let targetDestination = document.querySelector('div h1.green').parentNode.parentElement.children[1];

        targetDestination.appendChild(targetArticle);
        targetArticle.querySelector('button').parentElement.remove();
    }
}