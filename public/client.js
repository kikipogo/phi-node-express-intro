$(document).ready(function(){
  console.log('jquery was correctly sourced!');
  getAllSongs(); // remember that we must call function here > re-examine this! So it is posted before new entry?
  function getAllSongs(){
    $.ajax({
      type: 'GET', // retrive resource of url
      url: '/songs', //IN APP.JS > app.get('/songs', function(req, res){res.send(songList);})
      success: function(response){
        console.log('response', response);
      },
      error: function(error){ //incase we didn't get /songs log error
      console.log('error', error);
    }
  });
}

$('#addSongButton').on('click', function(){ //listening for click on addSongButton storing values of input for title and artist
  var newSongTitle = $('#title').val(); // defining newSongObject with user input
  var newSongArtist = $('#artist').val(); // defining newSongObject with user input
  var newSongObject = {
    title: newSongTitle,
    artist: newSongArtist
  };
  console.log(newSongObject);
  $.ajax({
    type: 'POST', // now posting
    url: '/newSong', // web location localhost:3000/newSong
    data: newSongObject, //data becomes req.body in app.js because of body parser
    success: function(response){
      console.log('response', response);
      getAllSongs(); // to run each time new post is made
    },
    error: function(error){
      console.log('error', error);
    }
  });
});

});
