var fs = require('fs');

fs.readFile('test.txt', 'utf8', function (err, content) {
    console.log(content);
});
console.log('first log');

fs.readFile('test2.txt', 'utf8', function (err, content) {
    console.log(content);
});
console.log('second log');

// first log > second log > test.txt || test2.txt (depends on the file size)