exports.graphqlLoggerMiddleware = (req, res, next) => {
  if (req && req.body && req.body.operationName === "IntrospectionQuery") {
    console.log("IntrospectionQuery");
  } else {
    console.log(JSON.stringify(req.body));
  }
  next();
};
