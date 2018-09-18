console.log('Starting app...');

const fsystem = require('fs');
const _ = require('loadsh');

const note = require('./notes.js');

var command = process.argv[2];

switch(command){
    case 'add':
        break;
    case 'list':
        break;
    case 'read':
        break;
    case 'remove':
        break;
    default:
        console.log(`Command [${command}] not found`);
}


