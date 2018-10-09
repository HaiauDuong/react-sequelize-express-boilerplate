const router = require('express').Router()
const google = require('./google')

router.use('/google', google)

module.exports = router