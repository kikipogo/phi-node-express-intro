// TO GET UP AND GOING
// cd to directory
// npm init will put in json file
// npm install express to get express --save
// add .gitignore file // in .gitignore put node_modules
// in package.json after "test" add "start": "node app.js" to use npm start
// make ajax request in client.js
// npm install --save body-parser

// var express = require('express'); // returns express from node_modules
// var app = express(); // making an app that is an object
// app.use(express.static('public')); //run this everytime a request comes in look for static file in public folder
// app.listen(3000); // on local host 3000

var express = require('express'); // returns express from node_modules
var app = express(); // making 'app' which is an object
var bodyParser = require('body-parser'); // library to send data from client to server

app.use(express.static('public')); //run this everytime a request comes in look for static file in public folder

app.use(bodyParser.urlencoded({extended: true})); //gets ahold of data we just created inputs

var songList = [
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

app.get('/songs', function(req, res){
  res.send(songList);
});

app.post('/newSong', function(req, res){
  var newSong = req.body; // defined in client.js -- function getAllSongs()
  if(newSong.artist !== 'Justin Bieber'){ // if artist IS NOT Justin Bieber run as normal
    songList.push(newSong); // adding newSong to newSongObject
    console.log(songList);
    res.sendStatus(200); //cool
  } else {
    res.sendStatus(500);//500 is error if artist is Justin Bieber
  }
});

app.listen(3000); // always listening on localhost: 3000
