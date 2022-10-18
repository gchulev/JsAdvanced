window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-btn').addEventListener('click', addSong);

    let genreElm = document.getElementById('genre');
    let songNameElm = document.getElementById('name');
    let songAuthorElm = document.getElementById('author');
    let dateElm = document.getElementById('date');

    let likesCounter = 0;

    function addSong(evt) {
        evt.preventDefault();

        if (genreElm.value !== '' && songNameElm.value !== '' && songAuthorElm.value !== '' && dateElm.value !== '') {
            let songCollectionElm = document.querySelector('div[class="all-hits-container"]');

            let div = document.createElement('div');
            let image = document.createElement('img');
            let h2Genre = document.createElement('h2');
            let h2Name = document.createElement('h2');
            let h2Author = document.createElement('h2');
            let h3 = document.createElement('h3');
            let saveSongBtn = document.createElement('button');
            let likeSongBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            // Assinging elements values and attributes

            div.classList.add('hits-info');
            image.setAttribute('src', "./static/img/img.png");
            h2Genre.textContent = `Genre: ${genreElm.value}`;
            h2Name.textContent = `Name: ${songNameElm.value}`;
            h2Author.textContent = `Author: ${songAuthorElm.value}`
            h3.textContent = `Date: ${dateElm.value}`;

            saveSongBtn.classList.add('save-btn');
            saveSongBtn.textContent = 'Save song';

            likeSongBtn.classList.add('like-btn');
            likeSongBtn.textContent = 'Like song';

            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';

            // Add eventlisteners
            saveSongBtn.addEventListener("click", saveSong);
            likeSongBtn.addEventListener('click', likeSong);
            deleteBtn.addEventListener('click', function () { this.parentElement.remove(); });

            // Appending all elemlents to their parrents

            songCollectionElm.appendChild(div);
            div.appendChild(image);
            div.appendChild(h2Genre);
            div.appendChild(h2Name);
            div.appendChild(h2Author);
            div.appendChild(h3);
            div.appendChild(saveSongBtn);
            div.appendChild(likeSongBtn);
            div.appendChild(deleteBtn);

            // Clear input fields

            genreElm.value = '';
            songNameElm.value = '';
            songAuthorElm.value = '';
            dateElm.value = '';


        }

    }

    function likeSong() {
        let likesP = document.getElementById('total-likes').querySelector('div[class="likes"]').children[0];
        likesCounter++;
        likesP.textContent = `Total Likes: ${likesCounter}`;
        this['disabled'] = true;
    }

    function saveSong() {
        let savedContainer = document.getElementsByClassName('saved-container')[0];

        let collectionOfSongsDiv = this.parentElement;
        let newDiv = collectionOfSongsDiv.cloneNode(true);

        newDiv.getElementsByClassName('save-btn')[0].remove();
        newDiv.getElementsByClassName('like-btn')[0].remove();

        newDiv.getElementsByClassName('delete-btn')[0].addEventListener("click", function () { this.parentElement.remove(); });

        savedContainer.appendChild(newDiv);

        this.parentElement.remove();
    }
}