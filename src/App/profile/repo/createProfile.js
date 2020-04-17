const { getDb } = require("../../../database");

exports.createProfile = async (profile) => {
  //add message to messages collection in db
  return getDb()
    .collection("profiles")
    .insertOne(profile)
    .catch(console.error);
};
