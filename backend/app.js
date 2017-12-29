const express = require('express')
const path = require('path')

const app = express()
const port = process.env.SERVER_PORT || 5000

app.use(express.static(path.join(__dirname + '/../public/')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.listen(port, (req, res) => {
  console.log('Server started at', port)
})