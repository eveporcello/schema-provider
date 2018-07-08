#!/usr/bin/env node
var { mockH5Server } = require('./index.js')
mockH5Server.listen(process.env.port || 4000)
    .then(({ url }) => `Mock High Fives GraphQL Service running at ${url}`)
    .then(console.log)
    .catch(console.error)