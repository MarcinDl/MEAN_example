const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'})
const connectionDB = async () => {
    await mongoose.connect(variables.env.DB_MONGO,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    console.log("Połączono z bazą danych");
}

module.exports = connectionDB;