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

  input AddPlayerToRoomInput {
    roomId: ID
    profileId: ID
  }

  input RemovePlayerFromRoomInput {
    roomId: ID
    profileId: ID
  }

  type RoomNodes {
    nodeCount: Int
    nodes: [Room]
  }

  type Player {
    profile: Profile
    color: String
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

  type Room {
    id: ID
    created: Date
    matchId: ID
    match: Match
    mode: Mode
    minPlayers: Int
    maxPlayers: Int
    name: String
    players: [Player]
    started: Date
    updated: Date
    matchConfigId: ID
    matchConfig: MatchConfig
  }

  extend type Query {
    rooms(search: RoomSearch): RoomNodes
    room(id: ID): Room
  }

  extend type Mutation {
    createRoom(input: CreateRoomInput): Room
    addPlayerToRoom(input: AddPlayerToRoomInput): Room
    removePlayerFromRoom(input: RemovePlayerFromRoomInput): Room
    startMatch(roomId: ID): Room
  }
  extend type Subscription {
    newRoom: Room
    updatedRoom: ID
  }
`;
