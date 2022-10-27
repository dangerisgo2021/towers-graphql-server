const { getDb } = require("../../../database");

exports.findByUserId = async ({ userId }) => {
  if (!userId) {
    throw new Error("cannot find falsy userId");
  }

  const doc = await getDb()
    .collection("profiles")
    .findOne({ userId })
    .catch(console.error);
  return doc ? { ...doc, id: doc._id } : null;
};
