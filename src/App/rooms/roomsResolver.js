const { profileById } = require("../profile/resolvers/query/profileById");
const { addPlayerToRoom } = require("./resolvers/mutation/addPlayerToRoom");
const {
  removePlayerFromRoom,
} = require("./resolvers/mutation/removePlayerFromRoom");
const { createRoom } = require("./resolvers/mutation/createRoom");
const { room } = require("./resolvers/query/room");
const { rooms } = require("./resolvers/query/rooms");
const { newRoom } = require("./resolvers/subscription/newRoom");

exports.roomsResolver = {
  Mutation: {
    createRoom,
    addPlayerToRoom,
    removePlayerFromRoom,
  },
  Query: {
    room,
    rooms,
  },
  Subscription: {
    newRoom,
  },
  Player: {
    profile: profileById,
  },
};
