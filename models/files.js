const mongoose = require("mongoose");
const User = require('./user')

const FilesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  files: [
    {
      name: String,
      url: String,
      key: String,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Files = mongoose.model("Files", FilesSchema);
module.exports = Files;
