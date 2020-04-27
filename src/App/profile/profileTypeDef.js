const { gql } = require("apollo-server-express");

exports.profileTypeDef = gql`
  type Profile {
    id: ID
    agentId: ID
    birthday: Date
    created: Date
    updated: Date
    rating: Int
    name: String
  }

  extend type Query {
    profile(agentId: ID, id: ID): Profile
  }

`;
