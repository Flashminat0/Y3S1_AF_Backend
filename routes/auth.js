import express from "express";
import {registerUser} from "../controllers/auth";

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
