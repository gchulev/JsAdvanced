function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let extraElement = document.getElementById('extra');

    if (extraElement.style.display === '' || extraElement.style.display === 'none') {
        extraElement.style.display = "block";
        btn.textContent = 'Less';
    }else if (extraElement.style.display === "block"){
        extraElement.style.display = "none";
        btn.textContent = 'More';
    }
}