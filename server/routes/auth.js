const express = require("express");

const router = express.Router();

//controllers
import { register, login } from "../controllers/auth";
router.post("/register", register);
router.post("/login", login);

module.exports = router;
