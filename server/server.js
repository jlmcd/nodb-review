const express = require('express')
const app = express()
const PORT = 1337
const grassCtrl = require('./grassCtrl')

app.get('/api/grass', grassCtrl.getPokemon)

app.listen(PORT, () => console.log(`${PORT} fluffy clouds`))