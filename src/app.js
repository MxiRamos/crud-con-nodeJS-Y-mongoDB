const express = require('express')
const app = express()


//routes
app.get('/', (req, res) => {
    res.send("Bienvenido a mi CRUD")
})


const PUERTO = process.env.PORT || 2000
app.listen(PUERTO, ()=> {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
})