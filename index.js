const cors = require("cors");
const express = require("express");
const http = require("http");
const { publish } = require("./src/PubSub");
const { last, get } = require("lodash");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./src/typeDefs");
const { resolvers } = require("./src/resolvers");
const { subscriptions } = require("./src/subscriptions");

const { connectToServer } = require("./src/database");

connectToServer((err) => {
  if (err) {
    throw err;
  }
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    subscriptions,
    introspection: true,
    playground: true,
    context: ({ req }) => {
      // get the user token from the headers
      const userId = get(req, "headers.userid", "no-user-id");
      // add the user to the context
      return { userId };
    },
  });

  const app = express();
  app.use(cors({ origin: true }));
  app.use(express.json());
  app.use("/publish", (req, res) => {
    const {
      body: { message: { messageId } = {}, subscription = "" } = {},
    } = req;
    console.log(
      "/publish received",
      JSON.stringify({ body: req.body, messageId })
    );

    const channel = last(subscription.split("/"));
    publish(channel, { messageId }).catch(console.error);
    console.log("published", JSON.stringify({ channel, messageId }));
    res.status(204).send();
  });

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 5000;
  console.log({ PORT, envPort: process.env.PORT });

  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
    );
  });
});
