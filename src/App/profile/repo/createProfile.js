const { get } = require("lodash");
const { getDb } = require("../../../database");

exports.createProfile = async (profile) => {
  //add message to messages collection in db
  return getDb()
    .collection("profiles")
    .insertOne(profile)
    .then((doc) => {
      return get(doc, "ops[0]", null);
    })
    .catch(console.error);
};
