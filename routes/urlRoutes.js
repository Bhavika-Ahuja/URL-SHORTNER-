

const express = require("express");
const shortid = require("shortid");
const Url = require("../models/Url");

const router = express.Router();

/* Create Short URL */


router.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ message: "URL is required" });
  }

  const shortCode = shortid.generate();

  const url = new Url({
    originalUrl,
    shortCode
  });

  await url.save();

  res.json({
  shortUrl: `http://localhost:5000/api/${shortCode}`
});


});

/* Redirect Short URL */
router.get("/:code", async (req, res) => {
  const url = await Url.findOne({ shortCode: req.params.code });

  if (!url) {
    return res.status(404).json({ message: "URL not found" });
  }

  url.visitCount++;
  await url.save();

  res.redirect(url.originalUrl);
});

module.exports = router;
