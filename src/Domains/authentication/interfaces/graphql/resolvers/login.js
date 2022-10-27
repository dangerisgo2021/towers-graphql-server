const { login } = require("../../../services/login");

exports.login = (parent, { agentId }) => {
  //record login
  return login({ agentId });
};
