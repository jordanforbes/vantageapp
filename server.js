// server.js
// load the things we need
var express = require('express');
var app = express();
var $ = require('jQuery');


app.set('view engine', 'ejs');

// app.set('view options', { locals: { scripts: ['work.js'] } })
// app.locals({
//     scripts: [],
//   renderScriptsTags: function (all) {
//     app.locals.scripts = [];
//     if (all != undefined) {
//       return all.map(function(script) {
//         return '<script src="/js/' + work.js + '"></script>';
//       }).join('\n ');
//     }
//     else {
//       return '';
//     }
//   },
//   getScripts: function(req, res) {
//     return scripts;
//   }
// });

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
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');