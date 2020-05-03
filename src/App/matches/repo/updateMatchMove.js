const { isNil } = require("lodash");
const { getDb, ObjectId } = require("../../../database");

exports.updateMatchMove = async ({ matchId, moves, board }) => {
  const update = {};
  if (!isNil(moves)) {
    update.moves = moves;
  }
  if (!isNil(board)) {
    update.board = board;
  }
  const { value } = await getDb()
    .collection("matches")
    .findOneAndUpdate(
      { _id: ObjectId(matchId) },
      { $set: update },
      {
        returnOriginal: false,
      }
    )
    .catch(console.error);

  return value ? { ...value, id: value._id } : null;
};
