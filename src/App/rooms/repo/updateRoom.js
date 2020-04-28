const { isNil } = require("lodash");
const { getDb, ObjectId } = require("../../../database");

exports.updateRoom = async ({
  roomId,
  update: { started, gameConfig, matchId },
}) => {
  const update = {};
  if (!isNil(started)) {
    update.started = started;
  }
  if (gameConfig) {
    update.gameConfig = gameConfig;
  }
  if (matchId) {
    update.matchId = matchId;
  }
  const { value } = await getDb()
    .collection("rooms")
    .findOneAndUpdate(
      { _id: ObjectId(roomId) },
      { $set: update },
      {
        returnOriginal: false,
      }
    )
    .catch(console.error);

  return value ? { ...value, id: value._id } : null;
};
