import express from 'express'
import {test111} from '../controllers/submittedTopic'

const router = express.Router()

router.post('/test111', test111)

module.exports = router
