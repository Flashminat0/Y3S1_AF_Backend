import express from "express";
import {herokuFunc} from "../controllers/heroku";

const router = express.Router();

router.get("/heroku", herokuFunc);

module.exports = router;
