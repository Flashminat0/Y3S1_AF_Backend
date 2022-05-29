import express from 'express'
import {getUsers, removeUser, createGroup, searchForGroup , getAllGroups,getUserDataFromId} from '../controllers/users'

const router = express.Router()

router.get('/users/userlist', getUsers)
router.delete('/users/removeuser', removeUser)

router.post('/users/create-group', createGroup)
router.get('/users/find-group', searchForGroup)
router.get('/users/get-all-groups', getAllGroups)
router.get('/users/get-user-data-from-id', getUserDataFromId)

module.exports = router
