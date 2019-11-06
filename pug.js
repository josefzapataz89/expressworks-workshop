'use strict'

const express = require('express')
const app = express()

const PORT = process.argv[2]
const TEMPLATES = process.argv[3]

app.set('views', TEMPLATES)
app.set('view engine', 'pug')

app.get('/home', (req, res) => {
        res.render('index',{
            date: new Date().toDateString()
        })
    })
    .listen(PORT)