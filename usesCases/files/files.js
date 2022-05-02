const bcrypt = require("bcrypt");
const Files = require("../../models/files");
const User = require('../../models/user')
/**
 *
 * @param {Object} userData - User data
 */
async function saveFiles(collection, userId) {
  console.log("collection", collection);
  // const user = await User.findById(userId)
  const newFiles = await Files({...collection, user: userId});
  await newFiles.save();
  return newFiles;
}

function getAll() {
  return Files.find({});
}

/**
 *
 * @param {String} id - id of user
 */
function getById(id) {
  return Files.findById(id);
}

module.exports = {
  saveFiles,
  getAll,
  getById,
};
