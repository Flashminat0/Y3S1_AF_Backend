import express from 'express'
import {approveProject, fetchMessages, rejectProject, retractDecision, sendMessage,} from '../controllers/messages'

const router = express.Router()

router.post('/chat/send-message', sendMessage)
router.post('/chat/fetch-message', fetchMessages)
router.post('/chat/approve-project', approveProject)
router.post('/chat/reject-project', rejectProject)
router.post('/chat/retract-project', retractDecision)

module.exports = router
