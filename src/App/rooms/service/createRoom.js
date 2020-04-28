const { publish } = require("../../../PubSub");
const { createMatch } = require("../../matches/service/createMatch");
const { insertRoom } = require("../repo/insertRoom");

exports.createRoom = async (input) => {
  //validate createRoomInput
  const { name, mode } = input;
  if (!name) {
    throw new Error("need name to create room");
  }
  if (!mode) {
    throw new Error("need mode to create room");
  }
  //add message to messages collection in db
  const newRoom = await insertRoom({
    ...input,
    created: new Date().getTime(),
  });
  //publish new Message to subscribers
  publish("newRoom", newRoom).catch(console.error);
  //return added message

  //if local create match
  if (mode === "LOCAL") {
    await createMatch({
      roomId: newRoom.id,
    });
  }

  return newRoom;
};
