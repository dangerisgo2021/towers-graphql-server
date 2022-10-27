const { updateRoom } = require("../repo/updateRoom");
const { publish } = require("../../../PubSub");
const { findRoomById } = require("../service/findRoomById");

exports.setSelectedCellService = async ({ roomId, cellId, player }) => {
  if (!roomId) {
    throw new Error("need roomId for setSelectedCellService");
  }

  if (!cellId) {
    throw new Error("need cellId for setSelectedCellService");
  }

  if (!Number.isInteger(player)) {
    throw new Error("need player for setSelectedCellService");
  }

  const room = await findRoomById({ id: roomId });

  if (!room) {
    throw new Error("could not find room with id" + roomId);
  }
  const { selectedCells = {} } = room;
  console.log({ selectedCells });
  const update = {
    selectedCells: {
      ...selectedCells,
      [player]: cellId,
    },
  };
  await updateRoom({
    roomId,
    update,
  });

  publish("roomUpdated", { roomId }).catch(console.error);
  return room;
};
