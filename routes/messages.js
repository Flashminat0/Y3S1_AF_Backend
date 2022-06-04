import express from 'express'
import {approveProject, fetchMessages, sendMessage} from '../controllers/messages'

const router = express.Router()

router.post('/chat/send-message', sendMessage)
router.post('/chat/fetch-message', fetchMessages)
router.post('/chat/approve-project', approveProject)

module.exports = router
