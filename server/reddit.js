const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/opentdb.com/api.php?amount=10', (req, res) => {
  request
    .get(`https://opentdb.com/api.php?amount=10`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.results)
      }
    })
})

module.exports = router
