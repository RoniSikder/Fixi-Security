const express = require('express')
const cors = require('cors');
const database = require('./DataBase/connection.js')

const app = express()
app.use(cors());
app.use(express.json())

database()

app.get('/',(request,response)=>{
    response.send("Hello Buddy");
})

module.exports = app;