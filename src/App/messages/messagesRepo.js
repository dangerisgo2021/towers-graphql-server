const { getDb } = require("../../database");

exports.insertMessage = async ({ text }) => {
  //validate message
  if (!text) {
    throw new Error("need text for a message");
  }
  //add message to messages collection in db
  const writeResponse = await getDb()
    .collection("messages")
    .insertOne({ text })
    .catch(console.error);

  //.ops[0] contains the newly created message
  return writeResponse.ops[0];
};

exports.findMessages = async () => {
  //add message to messages collection in db
  return await getDb()
    .collection("messages")
    .find()
    .toArray()
    .catch(console.error);
};
exports.newMessageStream = async () => {
  //add message to messages collection in db
  return await getDb()
    .collection("messages")
    .watch()
    .toArray()
    .catch(console.error);
};
