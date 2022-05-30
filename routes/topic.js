import express from 'express'
import {inputTopic, getTopic, deleteTopic} from '../controllers/topic'

const router = express.Router()

router.post('/input-topic', inputTopic)
router.get('/display-topic', getTopic)
router.delete('/removetopic', deleteTopic)

module.exports = router
