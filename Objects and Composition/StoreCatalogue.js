'use strict';

function storeCatalogue(input) {
    let catalogue = [];
    let product = {};

    for (const item of input) {
        let [name, price] = item.split(' : ');

        
        product = {name, price};
        //catalogue.push({product});
        catalogue.push({name, price});
    }


    catalogue.sort(customSort);

    function customSort(a, b){
        if(a.name > b.name){
            return 1;
        } else if(a.name < b.name){
            return -1;
        }else {
            if( a.name.toLower() > b.name.toLower())
            return 1;
            else if(a.name.toLower() < b.name.toLower()){
                return -1;
            }
            else{
                return 0;
            }
        }
    }
    let result = {};
    
    // first group items then print initial for each group
    for (const item of catalogue){
        let currentInitial = item.name[0].toUpperCase();
        if (!result[currentInitial]) {
            result[currentInitial] = {currentInitial, children: [item]};
        }else{
            result[currentInitial].children.push(item);
        }
        // console.log(currentInitial); 
        // console.log(`  ${item.name}: ${item.price}`);
    }
    console.log(result);
    console.table(catalogue);
}


storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);