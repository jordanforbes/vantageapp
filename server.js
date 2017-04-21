// server.js
// load the things we need
var express = require('express');
var app = express();
var $ = require('jQuery');


app.set('view engine', 'ejs');
app.set('port',( process.env.PORT || 5000 ));



app.use(express.static(__dirname + '/css'));


app.get('/', function(req, res) {

    res.render('pages/index', {
    
      function(){
        $(".message").click(
            function(){
                alert("hi")
            })
      
  }
    });
});

// about page 
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

// app.listen(8080);
// console.log('8080 is the magic port');
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });

