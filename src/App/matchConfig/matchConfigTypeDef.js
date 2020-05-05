const { gql } = require("apollo-server-express");

exports.matchConfigTypeDef = gql`
  type StartingCastleConfig {
    size: Int
    location: Location
  }

  type StartingPlayerConfig {
    size: Int
    playerIndex: Int
    location: Location
  }

  type BoardConfig {
    maxTowerHeight: Int
    width: Int
    height: Int
  }
  
  type VictoryConfig {
    castlesToWin: Int
    crownsToWin: Int
  }

  type MatchConfig {
    id: ID
    created: Date
    minPlayers: Int
    maxPlayers: Int
    startingPlayerConfig: [StartingPlayerConfig]
    startingCastleConfig: [StartingCastleConfig]
    boardConfig: BoardConfig
    victoryConfig: VictoryConfig
  }
`;
