const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const app = express()
const productsRoutes = require('./routes/products')


//middlewares
app.use(express.json())
app.use('/api', productsRoutes)

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my CRUD")
})

//mongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))


//PORT
const PUERTO = process.env.PORT || 2000
app.listen(PUERTO, ()=> {
    console.log(`Server is listening on port ${PUERTO}...`)
})