const mongoose = require('mongoose');



// POLONCZENOIE Z BAZA DANYCH AppTest
async function main() { 
    await mongoose.connect('mongodb://127.0.0.1:27017/appTest'), 
   console.log('connect db')
  }
  main().catch(err => console.log(err));

