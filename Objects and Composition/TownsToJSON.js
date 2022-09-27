'use strict';

function townsToJSON(input) {

    let matrix = [];
    for (const stringArr of input) {
        let row = stringArr.split(/\s*\|\s*/).filter(x => x);
        matrix.push(row);
    }

    let result = [];

    for (let row = 0; row < matrix.length; row++) {
        if (row !== 0) {
            let obj = {};

            for (let col = 0; col < matrix[0].length; col++) {
                let propName = matrix[0][col];
                let propValue = matrix[row][col];

                if (col > 0) {
                    let num = Number(propValue);
                    obj[propName] = Number(num.toFixed(2));
                } else {

                    obj[propName] = propValue;
                }
            }
            result.push(obj);
        }
    }

    console.log(JSON.stringify(result));
}

// townsToJSON([
//     '| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
// ]);


// townsToJSON([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'
// ]);


townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 22.6900 |',
    '| Plovdiv | 84.32 | 23.4214 |',
    '| Smolyan | 99.2343 | 55.3445 |'
]);