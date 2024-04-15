const express = require('express')
const router = express.Router()
//controller function
const { signupUser, loginUser } = require('../controllers/userController')


//login router
router.post('/login',loginUser)

router.post('/signup', signupUser)

//sginup router
module.exports = router