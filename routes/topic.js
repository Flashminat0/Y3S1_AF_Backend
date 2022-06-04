import express from 'express'
import {
    inputTopic,
    getTopic,
    deleteTopic,
    getTopicData,
    updateProjectTemplates,
} from '../controllers/topic'

const router = express.Router()

router.post('/input-topic', inputTopic)
router.get('/display-topic', getTopic)
router.delete('/removetopic', deleteTopic)

router.get('/topic/get-topic-data', getTopicData)
router.post('/topic/update-project-templates', updateProjectTemplates)
router.delete('/topic/remove-project-templates', deleteProjectTemplates)

module.exports = router
