

var express = require('express'); //always
var morgan = require('morgan');
var bodyParser = require('body-parser'); //used to allow me to populate that request parser variable
var marked = require('marked');
var app = express();

app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  console.log(req.body.string);
  var converted = mdConvert(req.body.string);
  res.send(converted);
});

function mdConvert(string){
  var markd =  marked(string);
  console.log(markd);
  return markd;
}

app.listen(3000)
