const { createLoginEvent } = require("../repo/createLoginEvent");

exports.login = ({ agentId }) => {
  return createLoginEvent({ agentId });
}