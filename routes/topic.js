import express from "express";

const router = express.Router();

import {inputTopic} from "../controllers/topic";

router.post("/input-topic",inputTopic);

router.get("/display-topic",inputTopic);

module.exports = router;