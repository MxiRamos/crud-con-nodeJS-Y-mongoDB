const express = require('express')
const productsSchema = require('../models/products')
const router = express.Router()

router.post('/products', (req, res) => {
    const products = productsSchema(req.body)
    products
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.get('/products', (req, res) => {
    productsSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.get('/products/:id', (req, res) => {
    const { id } = req.params
    productsSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.delete('/products/:id', (req, res) => {
    const { id } = req.params
    productsSchema
        .deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { name, category, ubication, price } = req.body
    productsSchema
        .updateOne({_id:id}, { $set: { name, category, ubication, price }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
        
})

module.exports = router
