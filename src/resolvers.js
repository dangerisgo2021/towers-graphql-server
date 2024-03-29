const {
  domainsResolverMap,
} = require("./Domains/interfaces/graphql/domainsResolverMap");

const { GraphQLScalarType } = require("graphql");

const { merge } = require("lodash");
const { messagesResolver } = require("./App/messages/messagesResolver");
const { profileResolver } = require("./App/profile/profileResolver");
const { roomsResolver } = require("./App/rooms/roomsResolver");

const messages = [];
const rootResolver = {
  Mutation: {
    ping: () => "Mutation pong",
  },
  Query: {
    ping: () => "Query pong",
    messages() {
      return messages;
    },
  },
  Subscription: {},
  Date: new GraphQLScalarType({
    name: "Date",
    description: "milliseconds since epoch",
    parseValue(value) {
      return value; // value from the client
    },
    serialize(value) {
      return value; // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};
exports.resolvers = merge(
  rootResolver,
  messagesResolver,
  profileResolver,
  roomsResolver,
  domainsResolverMap
);
