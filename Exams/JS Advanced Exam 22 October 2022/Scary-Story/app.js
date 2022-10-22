window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publishStory);

  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');

  function publishStory(e) {
    e.preventDefault();

    if (firstName.value !== '' && lastName.value !== '' && age.value !== '' && storyTitle.value !== '' && genre.value !== '' && story.value !== '') {
      let privewListElm = document.getElementById('preview-list');

      // Creating the elements
      let li = document.createElement('li');
      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      let pAge = document.createElement('p');
      let pTitle = document.createElement('p');
      let pGenre = document.createElement('p');
      let pStory = document.createElement('p');
      let saveStoryBtn = document.createElement('button');
      let editStoryBtn = document.createElement('button');
      let deleteStoryBtn = document.createElement('button');

      // Setting classes and element values
      li.classList.add('story-info');

      h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
      pAge.textContent = `Age: ${age.value}`;
      pTitle.textContent = `Title: ${storyTitle.value}`;
      pGenre.textContent = `Genre: ${genre.value}`;
      pStory.textContent = story.value;

      saveStoryBtn.classList.add('save-btn');
      saveStoryBtn.textContent = 'Save Story';
      saveStoryBtn.addEventListener('click', saveStory);
      //saveStoryBtn.disabled = false;

      editStoryBtn.classList.add('edit-btn');
      editStoryBtn.textContent = 'Edit Story';
      editStoryBtn.addEventListener('click', editStory);
      //editStoryBtn.disabled = false;

      deleteStoryBtn.classList.add('delete-btn');
      deleteStoryBtn.textContent = 'Delete Story';
      deleteStoryBtn.addEventListener('click', deleteStory);
      //deleteStoryBtn.disabled = false;

      // Add elements to their parents
      li.appendChild(article);
      li.appendChild(saveStoryBtn);
      li.appendChild(editStoryBtn);
      li.appendChild(deleteStoryBtn);

      article.appendChild(h4);
      article.appendChild(pAge);
      article.appendChild(pTitle);
      article.appendChild(pGenre);
      article.appendChild(pStory);

      privewListElm.appendChild(li);

      // disable the publish button
      publishBtn.disabled = true;

      // Clear input fields
      firstName.value = '';
      lastName.value = '';
      age.value = '';
      storyTitle.value = '';
      genre.value = '';
      story.value = '';
    }
  }

  function saveStory() {
    document.getElementById('main').innerHTML = '';
    let h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    document.getElementById('main').appendChild(h1);
  }

  function editStory() {
    let previewArticleElm = this.parentElement.getElementsByTagName('article')[0];

    firstName.value = previewArticleElm.children[0].textContent.replace('Name: ', '').split(' ')[0];
    lastName.value = previewArticleElm.children[0].textContent.replace('Name: ', '').split(' ')[1];
    age.value = previewArticleElm.children[1].textContent.replace('Age: ', '');
    storyTitle.value = previewArticleElm.children[2].textContent.replace('Title: ', '');
    genre.value = previewArticleElm.children[3].textContent.replace('Genre: ', '');
    story.value = previewArticleElm.children[4].textContent;

    this.parentElement.remove();

    publishBtn.disabled = false;
  }

  function deleteStory() {

    this.parentElement.remove();
    publishBtn.disabled = false;
  }
}
