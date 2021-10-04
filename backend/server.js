import express from 'express'

import products from './products.js'


const app = express()

app.get('/', (req, res) => {
  res.send('Api is running! ')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id
  const product = products.find(product => id === product._id)
  res.json(product)
})


app.listen(5000, () => {
  console.log('server listening on port 5000')
})