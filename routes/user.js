import express from 'express'
import {
    getUsers,
    removeUser,
    updateUserRole,
    createGroup,
    searchForGroup,
    getAllGroups,
    getUserDataFromId,
    isInAGroup,
    requestForJoinGroup,
    acceptToGroup,
    rejectToGroup,
} from '../controllers/users'

const router = express.Router()

router.get('/users/userlist', getUsers)
router.delete('/users/removeuser', removeUser)
router.put('/user/updaterole', updateUserRole)

router.post('/users/create-group', createGroup)
router.get('/users/find-group', searchForGroup)
router.get('/users/get-all-groups', getAllGroups)
router.get('/users/get-user-data-from-id', getUserDataFromId)
router.get('/users/is-in-a-group', isInAGroup)
router.post('/users/request-for-join-group', requestForJoinGroup)
router.post('/users/approve-to-group', acceptToGroup)
router.post('/users/reject-to-group', rejectToGroup)

module.exports = router
