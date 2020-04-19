const { searchRooms } = require("../service/searchRooms");
exports.rooms = async (parent, { search }) => {
  const rooms = await searchRooms({ search });

  return {
    nodeCount: rooms.length,
    nodes: rooms,
  };
};
