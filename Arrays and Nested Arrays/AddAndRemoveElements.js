"use string"

function AddRemoveElements(commandsArray) {
    let resultArray = [];
    let counter = 1;

    commandsArray.forEach(element => {
        if (element === 'add') {
            resultArray.push(counter);
        } else if (element === 'remove') {
            resultArray.pop();
        }
        counter++;
    });

    if (resultArray.length !== 0) {
        resultArray.forEach(element => {
            console.log(element);
        });
    } else {
        console.log('Empty');
    }
}

AddRemoveElements(['remove', 'remove', 'remove']);
AddRemoveElements(['add', 'add', 'remove', 'add', 'add']);