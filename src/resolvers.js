const {messagesResolver} = require("./App/messages/messagesResolver");

const messages = [];
const rootResolver = {
  Mutation: {
    ping: () => "Mutation pong",
    // addMessage(parent, { message }) {
    //   let entry = JSON.stringify({ id: messages.length, message });
    //   messages.push(entry);
    //   publish("newMessage", { entry });
    //   return messages;
    // },
  },
  Query: {
    ping: () => "Query pong",
    messages() {
      return messages;
    },
  },
  Subscription: {
    _empty: String
  },
};

exports.resolvers = {
  ...rootResolver,
  ...messagesResolver
}