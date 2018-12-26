var express = require('express');
var app = express();
var array = require('array');
var items=array();
app.get('/items', function(req, res){
	var name=req.params.name;	
});
app.get('/items/:name', function(req, res){
	var name=req.params.name;
	
	
});
app.listen(3000);