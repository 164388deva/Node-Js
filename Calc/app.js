var sum = require('./sum');
var subs = require('./substraction');
var mult = require('./multiplication');
var div = require('./division');


var firstOperand = +process.argv[2]
var secondOperand = +process.argv[3]

sum (firstOperand,secondOperand);
mult (firstOperand,secondOperand);
div (firstOperand,secondOperand);
subs (firstOperand,secondOperand);