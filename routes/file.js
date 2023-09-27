const express = require('express')
const router = express.Router()
const fileInput = require('../controllers/file')

router.route('/').post(fileInput)

module.exports = router
