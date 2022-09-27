function search() {
   let townsList = Array.from(document.querySelectorAll('ul li'));
   let searchBoxValue = document.getElementById('searchText').value;
   let matchesFoundCntr = 0;

   for (const item of townsList) {
      let text = item.textContent;

      if (text.includes(searchBoxValue)) {
         item.style.textDecoration = 'underline';
         item.style.fontWeight = 'bold';
         matchesFoundCntr++;
      }else{
         item.style.textDecoration = 'none';
         item.style.fontWeight = '';
      }
   }

   let result = document.getElementById('result');
   result.innerText = `${matchesFoundCntr} matches found`
}
