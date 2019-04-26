const path = require('path')
const express = require('express')

const redditRoutes = require('./trivia')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/opentdb.com', redditRoutes)

module.exports = server
