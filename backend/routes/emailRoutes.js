const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Email route working" });
});

module.exports = router;