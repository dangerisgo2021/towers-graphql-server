const { publish } = require("../../../PubSub");
const { removePlayer } = require("../repo/removePlayer");

exports.removePlayerFromRoom = async (input) => {
  const { roomId, profileId } = input;
  
  if (!roomId) {
    throw new Error("need roomId to addPlayerToRoom");
  }
  if (!profileId) {
    throw new Error("need profileId to addPlayerToRoom");
  }
  const updatedRoom = await removePlayer({ roomId, profileId });
  publish("updatedRoom", { roomId }).catch(console.error);
  return updatedRoom;
};
