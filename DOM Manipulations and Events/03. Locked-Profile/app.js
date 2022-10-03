function lockedProfile() {
    let bntCollection = document.querySelectorAll('div.profile button');

    for (const btn of bntCollection) {
        btn.addEventListener('click', showInfo);
    }

    function showInfo(evt) {
        let currentElmParentNode = evt.target.parentNode;
        let lockBtn = currentElmParentNode.querySelector('input[type="radio"][value="lock"]');
        let infoToShow = currentElmParentNode.querySelector('div');

        if (!lockBtn.checked) {
            const pressedBtn = currentElmParentNode.querySelector('button');
            if (pressedBtn.textContent === 'Show more') {
                infoToShow.style.display = 'block';
                pressedBtn.textContent = 'Hide it';
            } else {
                infoToShow.style.display = '';
                pressedBtn.textContent = 'Show more'
            }
        }
    }
}