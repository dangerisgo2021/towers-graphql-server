const { gql } = require("apollo-server-express");

exports.messagesTypeDef = gql`
  type Message {
    text: String
  }

  extend type Query {
    messages: [Message]
  }

  extend type Mutation {
    addMessage(text: String!): Message
  }

  extend type Subscription {
    newMessage: Message
  }
`;
