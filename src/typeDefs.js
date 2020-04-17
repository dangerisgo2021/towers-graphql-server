const {messagesTypeDef} = require("./App/messages/messagesTypeDef");
const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const rootTypeDef = gql`
  input Range {
    start: Int
    end: Int
  }

  type Query {
    _empty: String
    ping: String
  }

  type Mutation {
    ping: String
  }

  type Subscription {
    empty: String
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;
exports.typeDefs = [rootTypeDef, messagesTypeDef]