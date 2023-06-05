const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {         // Get request
    res.send("Get Request!")
})

module.exports = router