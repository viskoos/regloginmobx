const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect("mongodb://localhost/users-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(bodyParser.json())

app.use("/api", require('./api'))

app.listen(5000, () => {
  console.log('listen on port 5000')
})
