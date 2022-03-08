// 'use strict';

// const args = require('minimist')(process.argv.slice(2));

// console.log(args);
// console.log(args.i);

'use strict';

const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    alias: {
        h: 'help',
        v: 'version'
    }
});

console.log('args:', args);

// 'use strict';

// const minimist = require('minimist');

// let args = minimist(process.argv.slice(2), {
//     default: {
//         port: 8080
//     },
// });

// console.log('args:', args);