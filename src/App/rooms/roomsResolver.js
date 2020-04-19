const { createRoom } = require("./mutations/createRoom");
const { room } = require("./queries/room");
const { rooms } = require("./queries/rooms");
const { newRoom } = require("./subscriptions/newRoom");

exports.roomsResolver = {
  Mutation: {
    createRoom,
  },
  Query: {
    room,
    rooms,
  },
  Subscription: {
    newRoom,
  },
};
