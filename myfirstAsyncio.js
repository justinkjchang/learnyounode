var fs = require('fs');
var newlines = 0;
var contents = "";
fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err){
		return console.log(err);
	}
	contents += data.toString();
	contents = contents.split('\n');
	newlines = contents.length - 1;
	console.log(newlines);
});
