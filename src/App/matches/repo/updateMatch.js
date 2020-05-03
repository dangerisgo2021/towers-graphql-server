const { getDb, ObjectId } = require("../../../database");

exports.updateMatch = async (match) => {
  if (!match) {
    throw new Error("cannot insert falsy value");
  }

  const { value } = await getDb()
    .collection("matches")
    .findOneAndUpdate(
      { _id: ObjectId(match.id) },
      { $set: { ...match } },
      { returnOriginal: false }
    )
    .catch(console.error);

  return value ? { ...value, id: value._id } : null;
};
