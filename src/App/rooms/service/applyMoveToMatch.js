const {
  calculateVictoryProgress,
} = require("./applyMoveToMatchFunctions/calculateVictoryProgress");
const {
  findMatchConfigById,
} = require("../../matchConfig/service/findMatchConfigById");

const { updateRoom } = require("../repo/updateRoom");

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

  const nextCurrentPlayer = room.currentPlayer === 0 ? 1 : 0; // switch between player index 0 and 1

  const updatedMatch = await applyMove({ matchId: room.matchId, move });

  const { victoryConfig } = await findMatchConfigById({
    id: updatedMatch.matchConfigId,
  });
  const victoryProgress = calculateVictoryProgress({
    board: updatedMatch.board,
    victoryConfig,
  });

  await updateRoom({
    roomId,
    update: {
      currentPlayer: nextCurrentPlayer,
      victoryProgress,
    },
  });

  publish("roomUpdated", { roomId }).catch(console.error);
  return room;
};
