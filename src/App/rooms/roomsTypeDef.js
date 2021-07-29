const { gql } = require("apollo-server-express");

exports.roomsTypeDef = gql`
  enum Mode {
    CASUAL
    RANKED
    LOCAL
  }

  enum RoomAction {
    RESET
    UNDO
    REDO
  }

  input CreateRoomInput {
    name: String
    mode: Mode
  }

  input AddPlayerToRoomInput {
    roomId: ID
  }

  input RemovePlayerFromRoomInput {
    roomId: ID
    profileId: ID
  }

  input ApplyMoveToMatchInput {
    roomId: ID
    matchId: ID
    player: Int
    cellId: ID
    name: MoveName
  }

  input SetSelectedCellInput {
    roomId: ID
    player: Int
    cellId: ID
  }

  type RoomNodes {
    nodeCount: Int
    nodes: [Room]
  }

  type PlayerProgress {
    player: Int
    castles: Int
    crowns: Int
  }

  type VictoryProgress {
    winner: Int
    playerProgress: [PlayerProgress]
  }

  type SelectedCell {
    player: Int
    cellId: ID
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
    match: Match
    matchId: ID
    minPlayers: Int
    maxPlayers: Int
    mode: Mode
    name: String
    players: [Player]
    started: Date
    updated: Date
    matchConfigId: ID
    matchConfig: MatchConfig
    currentPlayer: Int
    victoryProgress: VictoryProgress
    selectedCells: [SelectedCell]
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
    resetMatch(roomId: ID): Room
    applyMoveToMatch(input: ApplyMoveToMatchInput): Room
    setSelectedCell(input: SetSelectedCellInput): Room
  }

  extend type Subscription {
    newRoom: Room
    updatedRoom(roomId: ID): ID
  }
`;
