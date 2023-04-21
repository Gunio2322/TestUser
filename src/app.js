const express = require('express')
const router = new express.Router()
const db = require('./db/mongoose')
const mongoose = require('mongoose')
const hbs = require('express-handlebars')
const { engine } = require('express-handlebars');
// const router = express()

router.engine('.hbs', engine({extname: '.hbs',
partialsDir: __dirname + '/views/partials/'
}));
router.set('view engine', '.hbs');
router.set('views', './views');






router.use(express.static(__dirname + '/public'));
router.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

// TU MONTOWANIE ROUTINGU Z Web.JS
router.use(require('./routes/web.js'))


// const router = require('/routers')


// ZAMIANA NA express.router

router.get('/',(req, res) =>{
    res.render('home')
  
})

router.get('/about',(req, res) =>{
    res.render('about')
})



module.exports = router




// // TWORZE SCHEMA
// const schemaTest = new mongoose.Schema({
//     firstName: String,
//     lastName: String
// })

// // KOMPILOWANIE DO MODEL
// const TestModel = mongoose.model('TestModel', schemaTest)

// // TWORZE MODEL

// router.post('/testmodels', (req, res) => {
// const schemaModel = new TestModel({
//     firstName: req.body.firstName,
//    lastName: req.body.lastName
// })

// // ZWRACA PRONIS I ZAPISAC THEN CATCH
// schemaModel.save()
// .then(savedDoc => {console.log('zapisało do modelu')})
// .catch(nosave => {console.log('nie zapisalo do modelu')});


// })

// POLONCZENIE Z BD routerTest

