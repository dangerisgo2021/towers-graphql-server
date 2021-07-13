const { publish } = require("../../../PubSub");
const { removePlayer } = require("../repo/removePlayer");

exports.removePlayerFromRoom = async (input) => {
  const { roomId, userId } = input;
  
  if (!roomId) {
    throw new Error("need roomId to removePlayerFromRoom");
  }
  if (!userId) {
    throw new Error("need userId to removePlayerFromRoom");
  }
  const updatedRoom = await removePlayer({ roomId, userId });
  publish("roomUpdated", { roomId }).catch(console.error);
  return updatedRoom;
};
