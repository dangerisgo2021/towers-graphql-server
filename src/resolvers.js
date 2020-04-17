const { merge } = require("lodash");
const { messagesResolver } = require("./App/messages/messagesResolver");

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
};

exports.resolvers = merge(rootResolver, messagesResolver);
