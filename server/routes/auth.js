const express = require("express");

const router = express.Router();

//controllers
import { register } from "../controllers/auth";
router.post("/register", register);

module.exports = router;
