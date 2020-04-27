const { getDb, ObjectId } = require("../../../database");

exports.pushPlayer = async ({ roomId, profileId }) => {
  if (!roomId) {
    throw new Error("cannot addPlayer to room without roomId");
  }

  const { value } = await getDb()
    .collection("rooms")
    .findOneAndUpdate(
      { _id: ObjectId(roomId) },
      { $addToSet: { players: { profileId } } },
      { returnOriginal: false }
    )
    .catch(console.error);

  return value ? { ...value, id: value._id } : null;
};
