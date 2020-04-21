const { gql } = require("apollo-server-express");

exports.roomsTypeDef = gql`
  enum Mode {
    CASUAL
    RANKED
    LOCAL
  }

  input CreateRoomInput {
    name: String
    mode: Mode
  }

  type Room {
    id: ID
    created: Date
    gameId: ID
    mode: Mode
    minPlayers: Int
    maxPlayers: Int
    name: String
    players: [ID]
    started: Date
    updated: Date
  }

  type RoomNodes {
    nodeCount: Int
    nodes: [Room]
  }

  input RoomSearch {
    created: Range
    mode: [Mode]
    minPlayers: Range
    maxPlayers: Range
    name: String
    players: [String]
    started: Boolean
    updated: Range
  }

  extend type Query {
    rooms(search: RoomSearch): RoomNodes
    room(id: ID): Room
  }

  extend type Mutation {
    createRoom(createRoomInput: CreateRoomInput): Room
  }
  extend type Subscription {
    newRoom: Room
  }
`;
