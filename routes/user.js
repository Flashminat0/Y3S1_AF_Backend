import express from 'express'
import {getUsers, removeUser} from '../controllers/users'

const router = express.Router()

router.get('/users/userlist', getUsers)
router.delete('/users/removeuser', removeUser)

module.exports = router
