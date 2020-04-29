const { v4: generateId } = require("uuid");

exports.createCell = ({ location, maxTowerSize = 5 }) => ({
  towerPieces: Array.from({ length: maxTowerSize }, () => ({
    type: "EMPTY",
    id: generateId(),
  })),
  location,
  id: generateId(),
  maxTowerSize,
  size: 0,
});
