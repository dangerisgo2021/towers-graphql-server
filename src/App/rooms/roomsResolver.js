const { selectedCells } = require("./resolvers/query/selectedCells.js");
const { resetMatch } = require("./resolvers/mutation/resetMatch");
const { applyMoveToMatch } = require("./resolvers/mutation/applyMoveToMatch");
const { startMatch } = require("./resolvers/mutation/startMatch");
const { profileById } = require("../profile/resolvers/query/profileById");
const { matchById } = require("../matches/resolvers/query/matchById");
const { addPlayerToRoom } = require("./resolvers/mutation/addPlayerToRoom");
const { setSelectedCell } = require("./resolvers/mutation/setSelectedCell");
const {
  removePlayerFromRoom,
} = require("./resolvers/mutation/removePlayerFromRoom");
const { createRoom } = require("./resolvers/mutation/createRoom");
const { room } = require("./resolvers/query/room");
const { rooms } = require("./resolvers/query/rooms");
const { newRoom } = require("./resolvers/subscription/newRoom");
const { updatedRoom } = require("./resolvers/subscription/updatedRoom");

const roomsResolver = {
  Mutation: {
    createRoom,
    addPlayerToRoom,
    removePlayerFromRoom,
    applyMoveToMatch,
    startMatch,
    resetMatch,
    setSelectedCell,
  },
  Query: {
    room,
    rooms,
  },
  Subscription: {
    newRoom,
    updatedRoom,
  },
  Player: {
    profile: profileById,
  },
  Room: {
    match: matchById,
    selectedCells: selectedCells,
  },
};
exports.roomsResolver = roomsResolver;
