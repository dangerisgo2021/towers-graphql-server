const { publish } = require("../../../PubSub");
const { pushPlayer } = require("../repo/pushPlayer");
const {
  findByUserIdOrCreateProfile,
} = require("../../profile/service/findByUserIdOrCreateProfile.js");

exports.addPlayerToRoom = async (input) => {
  const { roomId, userId } = input;
  console.log({ roomId, userId, input });
  
  if (!roomId) {
    throw new Error("need roomId to addPlayerToRoom");
  }
  if (!userId) {
    throw new Error("need userId to addPlayerToRoom");
  }

  const { _id: profileId } = await findByUserIdOrCreateProfile({ userId });
  const newRoom = await pushPlayer({ roomId, userId, profileId });
  publish("roomUpdated", { roomId }).catch(console.error);
  return newRoom;
};
