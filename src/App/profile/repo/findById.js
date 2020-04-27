const { getDb, ObjectId } = require("../../../database");

exports.findById = async ({ id }) => {
  if (!id) {
    throw new Error("cannot find falsy id");
  }

  const doc = await getDb()
    .collection("profiles")
    .findOne({ _id: ObjectId(id) })
    .catch(console.error);

  return doc ? { ...doc, id: doc._id } : null;
};
