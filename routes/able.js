const express = require('express')
const router = express.Router()
const ableController = require('../controllers/able')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, ableController.getable)

router.post('/createMeeting', ableController.createMeeting)

router.put('/deleteMeeting', ableController.deleteMeeting)

module.exports = router