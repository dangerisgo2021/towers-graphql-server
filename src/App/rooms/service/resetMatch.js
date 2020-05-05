const { updateRoom } = require("../repo/updateRoom");
const { buildBoard } = require("../../matches/service/buildBoard");
const { publish } = require("../../../PubSub");
const { resetMatch } = require("../../matches/service/resetMatch");
const {
  findMatchConfigById,
} = require("../../matchConfig/service/findMatchConfigById");
const { findRoomById } = require("./findRoomById");

const defaultMatchConfig = "5ea9148af06102142b1601ef";

exports.resetMatch = async ({ roomId, matchConfigId = defaultMatchConfig }) => {
  if (!roomId) {
    throw new Error("need roomId to resetMatch");
  }

  const room = await findRoomById({ id: roomId });
  const matchConfig = await findMatchConfigById({ id: matchConfigId });
  const board = buildBoard({ matchConfig });

  await resetMatch({
    roomId,
    board,
    id: room.matchId,
    matchConfigId: matchConfig.id,
  });

  await updateRoom({
    roomId,
    update: {
      currentPlayer: 0,
      victoryProgress: {
        winner: null,
      },
    },
  });

  publish("roomUpdated", { roomId }).catch(console.error);

  return { roomId };
};
