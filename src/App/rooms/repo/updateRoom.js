const { isNil } = require("lodash");
const { getDb, ObjectId } = require("../../../database");

exports.updateRoom = async ({
  roomId,
  update: { started, gameConfig, matchId, currentPlayer, victoryProgress },
}) => {
  const update = {};
  if (!isNil(started)) {
    update.started = started;
  }
  if (!isNil(currentPlayer)) {
    update.currentPlayer = currentPlayer;
  }
  if (gameConfig) {
    update.gameConfig = gameConfig;
  }
  if (matchId) {
    update.matchId = matchId;
  }
  if (victoryProgress) {
    update.victoryProgress = victoryProgress;
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
