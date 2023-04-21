const Schema = mongoose.Schema;
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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


module.exports = TestModel
