const express = require('express');
const app = express();
const handlebarsExpress = require('express-handlebars');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const hbs = handlebarsExpress.create({
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials/'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');


app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(__dirname + '/public'));


// CONNECT DATABASE 
async function main() { 
    await mongoose.connect('mongodb://127.0.0.1:27017/appTest'), 
   console.log('connect db')
  };


app.get('/', (req,res) => {
    // res.send('rumek')
    res.render('home')
});
app.get('/elements', (req,res) => {
    // res.send('rumek')
    res.render('elements')
});
app.get('/generic', (req,res) => {
    // res.send('rumek')
    res.render('generic')
});

app.listen((3700), ()=> {
    console.log('server start 3700')
})