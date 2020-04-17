const { subscribe } = require("../../../PubSub");



exports.newMessage = {
  resolve: ({message}) => {
    // noinspection JSUnresolvedVariable
    return message;
  },
  subscribe: () => subscribe("empty"),
};
