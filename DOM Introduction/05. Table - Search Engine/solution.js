function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = Array.from(document.querySelectorAll('table tbody tr'));
      let searchText = document.getElementById('searchField').value;
      //cleanup prevous searches
      tableRows.map(row => row.classList.remove('select'));

      for (const row of tableRows) {
         let rowData = row.innerText.split('\t');

         for (const rowDataItem of rowData) {
            if (rowDataItem.toLowerCase().includes(searchText.toLowerCase())) {
               row.classList.add('select');
            }
         }
      }
   }
}