const { gql } = require("apollo-server-express");

exports.matchesTypeDef = gql`
  enum MoveName {
    BUILD
    PUSH_LEFT
    PUSH_RIGHT
    PUSH_UP
    PUSH_DOWN
    PUSH
  }
  enum PieceType {
    EMPTY
    PLAYER
    CASTLE
  }

  type Location {
    x: Int
    y: Int
  }
  type TowerPiece {
    id: ID
    type: PieceType
    owner: ID
  }

  type Cell {
    id: ID
    location: Location
    maxTowerSize: Int
    size: Int
    towerPieces: [TowerPiece]
  }

  type Board {
    width: Int
    height: Int
    cells: [Cell]
  }

  type Move {
    player: ID
    location: Location
    name: MoveName
  }

  type Match {
    id: ID
    created: Date
    updated: Date
    name: String
    players: [ID]
    started: Date
    winner: Int
    matchConfigId: ID
    matchConfig: MatchConfig
    moves: [Move]
    board: Board
  }
`;
