const { getDb } = require("../../../database");

exports.findMessages = async () => {
  //add message to messages collection in db
  return getDb()
      .collection("messages")
      .find()
      .toArray()
      .catch(console.error);
};