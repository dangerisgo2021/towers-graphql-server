const { gql } = require("apollo-server-express");

exports.matchConfigTypeDef = gql`
  type StartingCastleConfig {
    size: Int
    x: Int
    y: Int
  }

  type StartingPlayerConfig {
    size: Int
    playerIndex: Int
    x: Int
    y: Int
  }

  type BoardConfig {
    maxTowerHeight: Int
    width: Int
    height: Int
  }

  type MatchConfig {
    id: ID
    created: Date
    minPlayers: Int
    maxPlayers: Int
    castlesToWin: Int
    crownsToWin: Int
    startingPlayerConfig: [StartingPlayerConfig]
    startingPlayerCastle: [StartingCastleConfig]
    boardConfig: BoardConfig
  }
`;
