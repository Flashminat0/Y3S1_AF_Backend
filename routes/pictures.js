import express from "express";

const router = express.Router();

import {savePictureOnDB} from "../controllers/pictures";

router.post("/save-pic-on-db", savePictureOnDB);


module.exports = router;
