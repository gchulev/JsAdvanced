'use strict';

function requestValidator(input) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let pattern = /^[\w.]+$/;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialChars = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!validMethods.includes(input.method)) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!input.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (input.uri !== '*' && !input.uri.match(pattern)) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (input.version === '' || !validVersions.includes(input.version)) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!input.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    for (const chr of specialChars) {
        if (input.message.includes(chr)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
    return input;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));