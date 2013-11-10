var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
contents = contents.toString();
var newlines = contents.split('\n');
newlines = newlines.length - 1;
console.log(newlines);
