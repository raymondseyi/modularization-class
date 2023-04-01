const express = require("express");
const router = express.Router()
const {displayWelcome,register} = require("../controllers/user.controller")
router.get("/welcome",displayWelcome)
router.post("/register",register)
module.exports = router
