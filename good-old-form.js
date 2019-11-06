'use strict'

const bodyparser = require('body-parser')
const express = require('express')
const app = express()

const PORT = Number(process.argv[2])

app.use(bodyparser.urlencoded({extended: false}))
    .post('/form', (req, res) => {
        res.send(req.body.str.split('').reverse().join(''))
    })
    .listen(PORT)