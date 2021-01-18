const { buildBoard } = require("../../matches/service/buildBoard");

const { publish } = require("../../../PubSub");
const { createMatch } = require("../../matches/service/createMatch");
const {
  findMatchConfigById,
} = require("../../matchConfig/service/findMatchConfigById");
const { updateRoom } = require("../repo/updateRoom");

const defaultMatchConfig = "6005cb3900a3d9ec224efd08";

exports.startMatch = async ({ roomId, matchConfigId = defaultMatchConfig }) => {
  if (!roomId) {
    throw new Error("need roomId to startMatch");
  }

  const matchConfig = await findMatchConfigById({ id: matchConfigId });
  const board = buildBoard({ matchConfig });

  const match = await createMatch({
    roomId,
    board,
    matchConfigId: matchConfig.id,
  });

  const updatedRoom = await updateRoom({
    roomId,
    update: {
      started: Date.now(),
      matchId: match.id,
      currentPlayer: 0,
      matchConfigId: matchConfig.id,
    },
  });

  publish("roomUpdated", { roomId }).catch(console.error);

  return updatedRoom;
};
