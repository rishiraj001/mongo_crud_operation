const mongoose = require('mongoose')
require('dotenv').config()

const password = process.env.DB_PASSWORD;
const username = process.env.DB_USERNAME;

const DB = `mongodb+srv://${username}:${password}@cluster0.gjx34zf.mongodb.net/books?retryWrites=true&w=majority`
mongoose.connect(DB).then(() => {
    console.log(`Connected to Mongo::DB`)
}).catch(err => {
    console.log(err);
})