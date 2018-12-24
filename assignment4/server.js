var fs = require('fs');
var readline = require('readline-sync');
fs.appendFile('mynewfile1.txt', name, function (err) {
  if (err) throw err;
  console.log('The file was saved!');
});