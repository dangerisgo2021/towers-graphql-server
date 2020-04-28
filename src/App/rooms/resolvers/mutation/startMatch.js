const {
  startMatch: startMatchService,
} = require("../../service/startMatch");

exports.startMatch = async (_, { input }) => {
  return startMatchService(input);
};
