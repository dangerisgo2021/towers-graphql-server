const { gql } = require("apollo-server-express");

exports.profileTypeDef = gql`
  type Profile {
    id: ID
    agentId: ID
    birthday: Date
    created: Date
    updated: Date
    rating: Int
  }

  extend type Query {
    profile(agentId: ID): Profile
  }

`;
