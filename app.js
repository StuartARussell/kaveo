const express = require('express');
const path = require('path');
const fs = require('fs');
//Init app
const app = express();

//Set public folder
app.use(express.static(path.join(__dirname, '/public')));

//Add route

app.get('/', function(req, res){
    res.sendFile('index.html', {'root':__dirname});
});

app.listen(3000, function(){
    console.log('server started on port 3000...');
});