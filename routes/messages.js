import express from 'express'
import {fetchMessages, sendMessage} from "../controllers/messages";

const router = express.Router()

router.post('/chat/send-message', sendMessage)
router.post('/chat/fetch-message', fetchMessages)


module.exports = router
