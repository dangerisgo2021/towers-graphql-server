const { gql } = require("apollo-server-express");

exports.matchesTypeDef = gql`
  enum MoveName {
    BUILD
    PUSH_LEFT
    PUSH_RIGHT
    PUSH_UP
    PUSH_DOWN
  }
  
  enum PieceType {
    EMPTY
    PLAYER
    CASTLE
  }
  
  type TowerPiece {
    id: ID
    type: PieceType
    owner: Int
  }

  type Cell {
    id: ID
    location: Location
    maxTowerSize: Int
    size: Int
    isCastle: Boolean
    towerPieces: [TowerPiece]
  }

  type Board {
    width: Int
    height: Int
    cells: [Cell]
  }

  type Move {
    player: Int
    name: MoveName
    selectedCell: Cell
  }

  type Match {
    id: ID
    created: Date
    updated: Date
    name: String
    started: Date
    winner: Int
    matchConfigId: ID
    matchConfig: MatchConfig
    moves: [Move]
    board: Board
  }
`;
