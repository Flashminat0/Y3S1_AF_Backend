import express from 'express'
import {sendMessage} from "../controllers/messages";

const router = express.Router()

router.post('/chat/send-message', sendMessage)


module.exports = router
