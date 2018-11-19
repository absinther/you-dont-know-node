var fs = require('fs');
var zlib = require('zlib');

var a = fs.createReadStream('pipe.txt');
var b = zlib.createGzip();
var c = fs.createWriteStream('pipe.txt.gz');

a.pipe(b).pipe(c);