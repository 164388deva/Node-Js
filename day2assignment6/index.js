var express=require('express');
var ex=express();
ex.use(express.static('public'));
ex.listen(1330);