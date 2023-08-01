var express = require('express');
var app = express();
var http = require('http').Server(app);

//Requires path for routes
const path = require('path');
require('./routes/homeroute.js').route(app, path)

//When a user fills out the login form, the information gets sent back to the server.
//The body-parser module is middleware that parses user input and makes it available through the REQ.BODY property.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
});

app.get('/example', function(req, res){
    res.sendFile(__dirname + '/www/example.html');
});


//User login verification 
app.post('/login', function(req, res) {

    var users = [{'username': 'admin', 'password': 'password'},
    {'username': 'bego', 'password': 'krkic'},
    {'username': 'student', 'password': 'password123'}];

    var account = {};
    //Request form properties using req.body.username and req.body.password
    account.username = req.body.username;
    account.password = req.body.password;
    //Check user credentials and report true if valid
    account.valid = false;
    for (var i = 0; i < users.length; i++){
        if (account.username == users[i].username && account.password == users[i].password) {
            account.valid = true;
        }
    }
    
    if (account.valid == true){
        //Send username of user if OK success status response
        res.status(200).send('Successful login');       
    } else {
        res.status(403).send('Unsuccessful login');
    }

    res.send(account.valid);

});