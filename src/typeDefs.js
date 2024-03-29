const { matchesTypeDef } = require("./App/matches/matchesTypeDef");
const { matchConfigTypeDef } = require("./App/matchConfig/matchConfigTypeDef");
const { profileTypeDef } = require("./App/profile/profileTypeDef");
const { messagesTypeDef } = require("./App/messages/messagesTypeDef");
const { roomsTypeDef } = require("./App/rooms/roomsTypeDef");
const {
  domainsTypeDef,
} = require("./Domains/interfaces/graphql/domainsTypeDef");
const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
// All imported typeDefs extend the below rootType
const rootTypeDef = gql`
  scalar Date

  input Range {
    start: Int
    end: Int
  }
  
  type Location {
      x: Int
      y: Int
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

const typeDefs = [
  rootTypeDef,
  messagesTypeDef,
  profileTypeDef,
  roomsTypeDef,
  matchesTypeDef,
  matchConfigTypeDef,
  domainsTypeDef,
];
// Since typeDefs need to be exported as arrays when there are sub-type
// flattening the list means the arrays dont need to be spread individually
exports.typeDefs = typeDefs.flat(1);
