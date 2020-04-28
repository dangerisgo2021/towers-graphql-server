const { getDb, ObjectId } = require("../../../database");

exports.removePlayer = async ({ roomId, profileId }) => {
  if (!roomId) {
    throw new Error("cannot removePlayer to room without roomId");
  }
  if (!profileId) {
    throw new Error("cannot removePlayer to room without profileId");
  }

  const { value } = await getDb()
    .collection("rooms")
    .findOneAndUpdate(
      { _id: ObjectId(roomId) },
      { $pull: { players: { profileId } } },
      { returnOriginal: false }
    )
    .catch(console.error);

  return value ? { ...value, id: value._id } : null;
};
