var fs = require('fs');

var output = fs.readFileSync('test.txt', 'utf8');
console.log('File output: ', output);
console.log('first log');

var output2 = fs.readFileSync('test2.txt', 'utf8');
console.log('File output: ', output2);
console.log('second log');

//test.txt > first log > test2.txt > second log