const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const alumnos = require('./routes/alumnos')
app.use(alumnos)

app.listen(3000, ()=>{
    console.log('Servidor corriendo en http://localhost:3000')
})