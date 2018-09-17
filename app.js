console.log('Starting app...');
const fsystem = require('fs');
const os = require('os');
const note = require('./notes.js');
const _ = require('loadsh');

var res = note.add(3, -1);
console.log(res);

console.log(_.isString(true));
console.log(_.isString('Gary'));

// var user = os.userInfo();

// fsystem.appendFile('greeting.txt', `Hello ${user.username}! Your age is ${note.age}`, (err) => {
//     if(err){
//         console.log('Unable to write to file');
//     }
// });

