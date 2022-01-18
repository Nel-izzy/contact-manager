const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.json({ msg: "get Auth info" }));

router.post("/", (req, res) => res.json({ msg: "Log in" }));

module.exports = router;
