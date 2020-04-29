const { getDb, ObjectId } = require("../../../database");

exports.readMatchConfigById = async ({ id }) => {
  if (!id) {
    throw new Error("cannot readMatchConfigById with falsy id : " + id);
  }

  const doc = await getDb()
    .collection("matchConfigs")
    .findOne({ _id: ObjectId(id) })
    .catch(console.error);

  return doc ? { ...doc, id: doc._id } : null;
};
