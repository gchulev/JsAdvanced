function solve() {
   document.querySelector('button[class="btn create"').addEventListener('click', createPost);

   let creator = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');

   let archive = [];

   function createPost(e) {
      e.preventDefault();

      let articlesSection = document.querySelector('main').getElementsByTagName('section')[0];
      let article = document.createElement('article');
      let h1 = document.createElement('h1');
      let categoryP = document.createElement('p');
      let categoryStrong = document.createElement('strong');
      let creatorP = document.createElement('p');
      let creatorStrong = document.createElement('strong');
      let contentP = document.createElement('p');
      let div = document.createElement('div');
      let deleteBtn = document.createElement('button');
      let archiveBtn = document.createElement('button');

      // Assing values to the elements
      h1.textContent = title.value;
      categoryP.textContent = 'Category:';
      categoryStrong.textContent = category.value;
      creatorP.textContent = 'Creator:';
      creatorStrong.textContent = creator.value;
      contentP.textContent = content.textContent;
      deleteBtn.textContent = 'Delete';
      archiveBtn.textContent = 'Archive'

      // Assignign classes and attributes to elements
      div.classList.add('buttons');
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');


      // Assigning elements to their parents
      article.appendChild(h1);
      article.appendChild(categoryP);
      categoryP.appendChild(categoryStrong);
      article.appendChild(creatorP);
      creatorP.appendChild(creatorStrong);
      article.appendChild(contentP);
      article.appendChild(div);
      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      // Assinging eventlisteners
      deleteBtn.addEventListener('click', deletePost);
      archiveBtn.addEventListener('click', archivePost);

      // Appending ot Post element
      articlesSection.appendChild(article);

      // Clean up the input fields
      creator.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   }

   function deletePost(e) {
      this.parentElement.parentElement.remove();
   }

   function archivePost(e) {
      let articleTitle = this.parentElement.parentElement.querySelector('h1').textContent;
      archive.push(articleTitle);

      this.parentElement.parentElement.remove();

      let archiveSectionOlElm = document.querySelector('section[class="archive-section"]').getElementsByTagName('ol')[0];
      archiveSectionOlElm.innerHTML = '';

      let sortedArchive = archive.sort((a, b) => a.localeCompare(b));
      for (const item of sortedArchive) {
         let li = document.createElement('li');
         li.textContent = item;
         archiveSectionOlElm.appendChild(li);
      }
   }
}
