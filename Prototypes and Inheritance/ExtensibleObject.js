'use strict';

function extensibleObject() {
    return {
        extend(template){
            for (const prop in template) {
                if (typeof template[prop] === 'function') {
                    let objProto = Object.getPrototypeOf(this);
                    objProto[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        }
    }
}

const myObj = extensibleObject();
console.log(myObj);

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);

debugger;
