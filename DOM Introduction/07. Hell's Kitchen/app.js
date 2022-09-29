function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementsByTagName('textarea')[0].value;
      input = input.replace('\\', '').replace('\n', '');

      let inputArr = Array.from(input.split('\"'));
      inputArr = inputArr.map(elm => elm.length <= 1 ? elm.replace(/\[|\]|,/, '') : elm).filter(elm => elm);
      inputArr = inputArr.map(elm => elm.replace(/,\n/, '')).filter(elm => elm);

      let restaurantArr = [];

      for (const item of inputArr) {
         let currentRestaurantName = item.split(' - ')[0];
         let currentWorkers = item.split(' - ')[1];
         let currentWorkersArr = currentWorkers.split(', ');

         //Important!!! Remember to create new object not to write in the same object reference....
         let restaurant = {};

         if (restaurantArr.some(elm => elm.name === currentRestaurantName)) {

            restaurant = restaurantArr.find(elm => elm.name === currentRestaurantName);
            //If the restaurant exists but has no employees yet, we create them
            for (const workerItem of currentWorkersArr) {
               let workerName = workerItem.split(' ')[0];
               let workerSalary = Number(workerItem.split(' ')[1]);

               //If the worker doesn't exist in this restaurant we will add it
               if (!restaurant.workers.some(elm => elm.name === workerName)) {
                  restaurant['workers'].push({ name: workerName, salary: workerSalary });
               }
            }
         } else {

            restaurant['name'] = currentRestaurantName;
            restaurant['workers'] = [];

            //adding workers to the newly created restaurant
            for (const workerItem of currentWorkersArr) {
               let workerName = workerItem.split(' ')[0];
               let workerSalary = Number(workerItem.split(' ')[1]);
               restaurant['workers'].push({ name: workerName, salary: workerSalary })
            }
            restaurantArr.push(restaurant);
         }
      }

      let bestRestaurant;
      let bestSalarySum = 0;
      let bestRestaurantName;

      for (const item of restaurantArr) {
         let workersCollection = item.workers;
         let sum = 0;

         for (const wrkr of workersCollection) {
            sum += wrkr.salary;
         }

         if (sum > bestSalarySum) {
            bestSalarySum = sum;
            bestRestaurantName = item.name;
         }
      }

      bestRestaurant = restaurantArr.find(r => r.name === bestRestaurantName);
      let avgSalary = bestRestaurant.workers.map(elm => elm.salary).reduce((acc, w) => acc + w) / bestRestaurant.workers.length;
      let bestSalary = bestRestaurant.workers.map(w => w.salary).reduce((acc, num) => Math.max(acc, num));
      let bestWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      let workersResult = '';
      for (const worker of bestWorkers) {
         workersResult += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      document.querySelectorAll('div#bestRestaurant p')[0].innerText = `Name: ${bestRestaurant.name} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      document.querySelectorAll('div#workers p')[0].innerText = workersResult;
   }
}