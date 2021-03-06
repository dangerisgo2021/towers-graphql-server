const { publish } = require("../../../PubSub");
const { pushPlayer } = require("../repo/pushPlayer");

exports.addPlayerToRoom = async (input) => {
  const { roomId, profileId } = input;
  if (!roomId) {
    throw new Error("need roomId to addPlayerToRoom");
  }
  if (!profileId) {
    throw new Error("need profileId to addPlayerToRoom");
  }
  const newRoom = await pushPlayer({ roomId, profileId });
  publish("roomUpdated", { roomId }).catch(console.error);
  return newRoom;
};
