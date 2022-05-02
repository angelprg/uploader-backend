const express = require("express");
const upload = require("../../lib/upload-images");
const Files = require("../../models/files");
const auth = require("../../middlewares/auth");
const { saveFiles } = require("../../usesCases/files/files");

const router = express.Router();

const multiUploader = upload.array("image");

router.get("/", async (req, res) => {
  const files = await Files.find({}).populate('user');
  try {
    res.send(files);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", auth, multiUploader, async (req, res) => {
  const userId = req.user.id
  console.log('userId', userId)
  const collection = {
    name: req.body.title,
    files: req.files.map((img) => ({
      name: img.originalname,
      url: img.location,
      key: img.key,
    })),
  };
  const newFiles = saveFiles(collection, userId);
  res.status(200).send({ uploaded: newFiles });
});

module.exports = router;
