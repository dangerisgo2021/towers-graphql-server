const { gql } = require("apollo-server-express");

exports.matchesTypeDef = gql`
  type Match {
    id: ID
    created: Date
    updated: Date
    name: String
    players: [Int]
    started: Date
    winner: Int
    matchConfigId: ID
    matchConfig: MatchConfig
  }
`;
