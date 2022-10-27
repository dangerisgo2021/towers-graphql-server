const { readProfileById } = require("../../../services/readProfileById");

exports.readProfile = (parent, { read }) => {
  if (!read) return null;
  if (read.id) {
    return readProfileById({ id: read.id });
  } else if (read.agentId) {
    //   return readProfileByAgentId({ agentId: args.agentId });
    return {};
  } else {
    return {};
  }
};
