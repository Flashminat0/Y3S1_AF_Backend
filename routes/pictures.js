import express from "express";

const router = express.Router();

import {savePictureOnDB , getPictureFromId} from "../controllers/pictures";

router.post("/save-pic-on-db", savePictureOnDB);
router.get("/get-url-from-pic-id",getPictureFromId);

module.exports = router;
