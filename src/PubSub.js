const { PubSub } = require("graphql-subscriptions");

// Creates a client
const pubSub = new PubSub();

exports.publish = (channel, message) => pubSub.publish(channel, message);
exports.subscribe = channel => pubSub.asyncIterator(channel);