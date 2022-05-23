import express from 'express'
import { herokuFunc, helloTest } from '../controllers/heroku'

const router = express.Router()

router.get('/heroku', herokuFunc)
router.get('/test', helloTest)

module.exports = router
