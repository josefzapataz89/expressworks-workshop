'use strict'

const path = require('path')

const express = require('express')
const app = express()

const PORT = process.argv[2]
const FILEPATH = process.argv[3]

app.use(express.static(FILEPATH || path.join(__dirname, 'public')))
    .listen(PORT)
