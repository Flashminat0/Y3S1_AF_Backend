import express from 'express'
import {approveProject, rejectProject} from '../controllers/submittedTopic'

const router = express.Router()

router.post('/submittedTopic/approve-topic', approveProject)
router.post('/submittedTopic/reject-topic', rejectProject)

module.exports = router
