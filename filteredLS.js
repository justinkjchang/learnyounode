fs = require('fs');
fs.readdir(process.argv[2], function(err, files){

        if(err){
                return console.log(err);
        }

        var patt = new RegExp("\\." + process.argv[3] + "$");
        for(var i = 0; i < files.length; i++){
                if(patt.test(files[i])){
                        console.log(files[i]);
                }
        }

});

