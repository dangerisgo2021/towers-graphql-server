const { publish } = require("../../../PubSub");
const { createMatch } = require("../../matches/service/createMatch");
const { updateRoom } = require("../repo/updateRoom");

exports.startMatch = async (_, { roomId }) => {
  if (!roomId) {
    throw new Error("need roomId to startMatch");
  }
  const match = await createMatch({ roomId });
  const newRoom = await updateRoom({
    roomId,
    update: { started: Date.now(), matchId: match.id },
  });
  publish("updatedRoom", { roomId }).catch(console.error);
  return newRoom;
};
