const { queryRooms } = require("../repo/queryRooms");

exports.searchRooms = async ({ search }) => {
  return queryRooms({ search });
};
