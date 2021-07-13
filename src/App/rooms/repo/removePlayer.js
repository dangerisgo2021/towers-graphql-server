const { findByUserId } = require("../../profile/service/findByUserId.js");
const { getDb, ObjectId } = require("../../../database");

exports.removePlayer = async ({ roomId, userId }) => {
  if (!roomId) {
    throw new Error("cannot removePlayer to room without roomId");
  }
  if (!userId) {
    throw new Error("cannot removePlayer to room without profileId");
  }
  const { _id: profileId } = await findByUserId({ userId });
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
