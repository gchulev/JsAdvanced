window.addEventListener("load", solve);

function solve() {
  let postObj = {
    title: '',
    category: '',
    postContent: ''
  }

  document.getElementById('publish-btn').addEventListener('click', submitPost);
  document.getElementById('clear-btn').addEventListener('click', clearAllPosts);

  function submitPost() {

    postObj.title = document.getElementById('post-title');
    postObj.category = document.getElementById('post-category');
    postObj.postContent = document.getElementById('post-content');

    if (postObj.title.value !== '' && postObj.category.value !== '' && postObj.postContent.value !== '') {
      //creating the new elements
      let li = document.createElement('li');
      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      let p = document.createElement('p');
      let secondP = document.createElement('p');
      let editBtn = document.createElement('button');
      let approveBtn = document.createElement('button');

      // Setting values and attaching classes to the elements
      li.classList.add('rpost');
      h4.textContent = postObj.title.value;
      p.textContent = `Category: ${postObj.category.value}`;
      secondP.textContent = `Content: ${postObj.postContent.value}`;
      editBtn.classList.add('action-btn')
      editBtn.classList.add('edit');
      approveBtn.classList.add('action-btn')
      approveBtn.classList.add('approve');

      editBtn.textContent = 'Edit';
      approveBtn.textContent = 'Approve';

      // Appending the elements to their appropriate parents
      let ul = document.getElementById('review-list');

      // Adding eventlisteners to the buttons
      editBtn.addEventListener('click', editPost);
      approveBtn.addEventListener('click', approvePost);

      ul.appendChild(li);
      li.appendChild(article);
      li.appendChild(editBtn);
      li.appendChild(approveBtn);
      article.appendChild(h4);
      article.appendChild(p);
      article.appendChild(secondP);

      for (const [k, v] of Object.entries(postObj)) {
        postObj[k].value = '';
      }
    }


  }

  function editPost(e) {
    let currentArticle = this.parentElement.querySelector('article').children;
    document.getElementById('post-title').value = currentArticle[0].textContent;
    document.getElementById('post-category').value = currentArticle[1].textContent.replace('Category:', '').trim();
    document.getElementById('post-content').value = currentArticle[2].textContent.replace('Content:', '').trim();

    this.parentElement.remove();
  }

  function approvePost(e) {
    let elmToMove = this.parentElement.cloneNode(true);
    let destinationElm = document.getElementById('published-list');
    destinationElm.appendChild(elmToMove);
    Array.from(elmToMove.getElementsByTagName('button')).map(elm => elm.remove());
    this.parentElement.remove();

  }

  function clearAllPosts() {
    let liItemsArr = Array.from(document.getElementById('published-list').children);
    for (const item of liItemsArr) {
      item.remove();
    }
  }
}
