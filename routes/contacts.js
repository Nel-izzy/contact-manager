const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.json({ msg: "get User Contacts" }));

router.post("/", (req, res) => res.json({ msg: "Add contact" }));

router.put("/:id", (req, res) => res.json({ msg: "Update contact" }));

router.delete("/:id", (req, res) => res.json({ msg: "Delete contact" }));

module.exports = router;
