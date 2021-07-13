const cors = require("cors");
const express = require("express");
const http = require("http");
const {
  publishMiddleware,
} = require("./src/server/middleware/publishMiddleware.js");
const {
  graphqlLoggerMiddleware,
} = require("./src/server/middleware/graphqlLoggerMiddleware.js");
const {
  getUserFromAccessTokenMiddleware,
} = require("./src/server/middleware/getUserFromAccessTokenMiddleware.js");

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
    tracing: true,
    engine: {
      apiKey: "service:towers:oJ_qomdkb2wGOFfz7PuHKA",
    },
    context: ({ req }) => {
      if (!req) {
        return { websocket: true };
      }
      // noinspection JSUnresolvedVariable
      return { user: req.user, headers: req.headers };
    },
  });

  const app = express();
  app.use(cors({ origin: true }));
  app.use(express.json());

  app.use(getUserFromAccessTokenMiddleware);

  app.use("/graphql", graphqlLoggerMiddleware);
  app.use("/publish", publishMiddleware);

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
