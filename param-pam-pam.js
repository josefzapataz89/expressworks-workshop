'use strict'

const crypto = require('crypto')
const express = require('express')
const app = express()

const PORT = Number(process.argv[2])

app.put('/message/:id', (req, res) => {
        let id = req.params.id

        let str_crypt = crypto.createHash('sha1')
                            .update(`${new Date().toDateString().toString()}${id}`)
                            .digest('hex')

        res.send(str_crypt)
    })
    .listen(PORT)