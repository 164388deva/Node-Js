var fs=require('fs');


var data = fs.readFileSync('index.txt', 'utf8').split(' ');
var c=0;
for(var i=0;i<data.length;i++){

    if(data[i]=='hello'){
        c++;
      
    }
  
}

console.log('hello',c);
console.log(data);