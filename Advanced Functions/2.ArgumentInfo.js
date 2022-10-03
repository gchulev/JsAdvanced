'use strict';

function solve(...params) {
    let result = {};
    let resultString = '';
    for (const pr of params) {
        // console.log(`${typeof (pr)}: ${pr}`);
        resultString += `${typeof (pr)}: ${pr}\n`;

        if (!result.hasOwnProperty(typeof (pr))) {
            result[`${typeof (pr)}`] = 0;

        }
        result[`${typeof (pr)}`]++;
    }

    for (let [k, v] of Object.entries(result)) {
        // console.log(`${k} = ${v}`);
        resultString += `${k} = ${v}\n`;
    }

    console.log(resultString.trimEnd());
}

solve('cat', 42, function () { console.log('Hello world!') });
