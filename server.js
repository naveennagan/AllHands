var express=require('express');

var app = express();

app.set('port', process.env.PORT || 3100);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendfile('public/html/index.html');
});

app.listen(app.get('port'), function(){

	console.log( 'Express started on http://localhost:' +

	app.get('port') + '; press Ctrl-C to terminate.' );

});