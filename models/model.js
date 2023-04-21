const mongoose = require('mongoose');


// TWORZE SCHEMA
const schemaTest = new mongoose.Schema({
    firstName: String,
    lastName: String
})

// KOMPILOWANIE DO MODEL
const TestModel = mongoose.model('TestModel', schemaTest)

