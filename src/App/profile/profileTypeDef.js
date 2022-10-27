const { gql } = require("apollo-server-express");

exports.profileTypeDef = gql`
  type Profile {
    id: ID
    userId: ID
    birthday: Date
    created: Date
    updated: Date
    rating: Int
    name: String
  }

  extend type Query {
    profile(userId: ID, id: ID): Profile
  }

`;
