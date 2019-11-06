'use strict'

const express = require('express')
const app = express()

const PORT = Number(process.argv[2])
const FILES = process.argv[3]

app.use(require('stylus').middleware(FILES))
app.use(express.static(FILES))

app.listen(PORT)
