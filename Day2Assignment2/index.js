var express = require('express');
var app = express();

app.get('/year', function(req, res){
	var age=req.query.age;
	var date=new Date().getFullYear();
	var bornyear=date-age;
   res.send('you were born in' + bornyear);
});
app.listen(3000);