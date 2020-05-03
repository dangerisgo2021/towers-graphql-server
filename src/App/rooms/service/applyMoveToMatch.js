const { publish } = require("../../../PubSub");
const { applyMove } = require("../../matches/service/applyMove");
const { findRoomById } = require("../service/findRoomById");

exports.applyMoveToMatch = async ({ roomId, move }) => {
  if (!roomId) {
    throw new Error("need roomId to applyMoveToMatch");
  }

  if (!move) {
    throw new Error("need move to applyMoveToMatch");
  }

  const room = await findRoomById({ id: roomId });
  await applyMove({ matchId: room.matchId, move });
  publish("roomUpdated", { roomId }).catch(console.error);
  return room;
};
