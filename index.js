const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = express.Router();
const bodyParser = require('body-parser');
const handlebarsExpress = require('express-handlebars')
const db = require('./db')
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const hbs = handlebarsExpress.create(
    {extname: '.hbs'}
);
const hbsPartials = handlebarsExpress.create({
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials/'
});


app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

PORT = 3500
// const router = require('/routers')


// ZAMIANA NA express.ROUTER

app.get('/',(req, res) =>{
    res.render('home')
  
})

app.get('/about',(req, res) =>{
    res.send('testabout')
})





// SLUCHANIE NA PORCIE
app.listen(PORT, ()=> {console.log('server start 3500')})



// TWORZE SCHEMA
const schemaTest = new mongoose.Schema({
    firstName: String,
    lastName: String
})

// KOMPILOWANIE DO MODEL
const TestModel = mongoose.model('TestModel', schemaTest)

// TWORZE MODEL

app.post('/testmodels', (req, res) => {
const schemaModel = new TestModel({
    firstName: req.body.firstName,
   lastName: req.body.lastName


})
// ZWRACA PRONIS I ZAPISAC THEN CATCH
schemaModel.save()
.then(savedDoc => {console.log('zapisało do modelu')})
.catch(nosave => {console.log('nie zapisalo do modelu')});


})
