const { gql } = require("apollo-server-express");

exports.authenticationTypeDef = gql`
  type AuthenticationCommands {
    login(agentId: ID): ID
  }

  type AuthenticationDomainObject {
    commands: AuthenticationCommands
  }

  extend type DomainMutation {
    authentication: AuthenticationDomainObject
  }
`;
