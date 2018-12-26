
var fs = require('fs');

var data =  process.argv[2];



fs.writeFile('file.txt', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});