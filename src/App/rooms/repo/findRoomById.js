const { getDb, ObjectId } = require("../../../database");

exports.findRoomById = async ({ id }) => {
  if (!id) {
    throw new Error("cannot find falsy id");
  }

  const doc = await getDb()
    .collection("rooms")
    .findOne({ _id: new ObjectId(id) })
    .catch(console.error);
  return doc ? { ...doc, id: doc._id } : null;
};
