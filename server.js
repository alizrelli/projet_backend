const express = require('express')
const dbconnect = require('./config/dbconnect')
require('dotenv').config()
const app = express()
dbconnect()

// middelware
app.use(express.json())
app.use('/contact',require('./routes/contact'))
const port=process.env.PORT
app.listen(port,(err)=>err?console.log(err):console.log(`server is connected in ${port}`))