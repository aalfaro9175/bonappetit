const express = require('express')
const bodyParser = require('body-parser')
const { join } = require('path')

const dishes = require('../../sample-dishes')
const models = require('./models')

const app = express()

app.use(express.static(join(__dirname, '..', '..', '/public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Importante: las rutas del API que devuelven informacion van de primero que la que devuelve el html
app.get('/api/dishes', (req, res) => {
  models.Dish.findAll().then(result => res.send(result))
})

app.post('/api/dishes', (req, res) => {
  models.Dish.create(req.body).then(result => res.send(result))
})

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '/public/index.html'))
})

app.listen(3005, () => {
  console.log('Server running on port 3005')
})
