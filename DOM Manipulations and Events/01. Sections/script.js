function create(words) {
   let contentElm = document.getElementById('content');

   for (const arrayElm of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = arrayElm;
      p.style.display = 'none';

      div.addEventListener('click', showContent);
      div.appendChild(p);
      contentElm.appendChild(div);
   }
   for (const contentNode of contentElm.childNodes) {
      if (contentNode.nodeType === 3) {
         contentNode.remove();
      }
   }

   function showContent(){
      this.children[0].style.display = 'block';
   }
}