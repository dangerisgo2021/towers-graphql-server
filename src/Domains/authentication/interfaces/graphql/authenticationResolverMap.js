const { login } = require("./resolvers/login");

exports.authenticationResolverMap = {
  DomainMutation: {
    authentication: () => ({})
  },
  AuthenticationDomainObject: {
    commands: () => ({})
  },
  AuthenticationCommands: {
    login
  }
};
