const { actionCreatorFactory } = require("../../../utils/actionCreatorFactory");

const namespace = "authentication";

exports.loginEvent = actionCreatorFactory({
  namespace,
  type: "login",
  payload: ({ agentId }) => ({ id: agentId, agentId }),
});
